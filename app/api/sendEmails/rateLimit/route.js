import { createClient } from 'redis';
import crypto from 'crypto';

// 1. Initialize Redis Client
const client = createClient({
  url: process.env.REDIS_URL,
});

client.on('error', (err) => console.error('Redis Client Error:', err));

// Immediate connection for long-running environments (Node.js/Docker)
// If using Next.js/Vercel, move this inside the handler or use a singleton pattern
(async () => {
  if (!client.isOpen) await client.connect();
})();

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Basic Validation
    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: "Invalid email." }), { status: 400 });
    }

    const key = `rate_limit:${encodeURIComponent(email)}`;
    const now = Date.now(); // Using milliseconds for higher precision
    const windowMs = 300 * 1000; // 5 minutes in milliseconds
    const limit = 5; // Maximum allowed requests per window

    // 2. Atomic Transaction Execution
    // We cleanup, count, and add in one "pipeline" to the server
    const [removedCount, currentCount] = await client
      .multi()
      .zRemRangeByScore(key, 0, now - windowMs) // Remove old entries
      .zCount(key, now - windowMs, '+inf')      // Count remaining entries
      .exec();

    if (currentCount < limit) {
      // 3. Log the current request
      // We add a random suffix so that multiple hits in the same ms don't overwrite each other
      const requestId = `${now}-${crypto.randomBytes(4).toString('hex')}`;
      
      await client
        .multi()
        .zAdd(key, { score: now, value: requestId })
        .expire(key, 300) // Keep the key alive for the duration of the window
        .exec();

      return new Response(
        JSON.stringify({ 
          allowed: true, 
          remaining: limit - (currentCount + 1) 
        }), 
        { status: 200 }
      );
    } else {
      // 4. Rate Limit Exceeded
      return new Response(
        JSON.stringify({ 
          allowed: false, 
          message: "Too many requests. Please wait 5 minutes." 
        }), 
        { status: 429 }
      );
    }
  } catch (error) {
    console.error("Redis Error:", error);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}
