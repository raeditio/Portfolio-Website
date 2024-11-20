import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL,
});

// Global Redis error listener
client.on('error', (err) => console.error('Redis Client Error:', err));

// Ensure Redis is connected at startup
(async () => {
  try {
    if (!client.isOpen) await client.connect();
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
  }
})();

export async function POST(req) {
  const { email } = await req.json();

  // Validate email input
  if (!email || !email.includes('@')) {
    return new Response(
      JSON.stringify({ error: "Invalid email address." }),
      { status: 400 }
    );
  }

  const encodedEmail = encodeURIComponent(email);
  const key = `email:${encodedEmail}`;
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const rateLimitWindow = 300; // 5 minutes

  try {
    // Remove timestamps older than the rate limit window
    await client.zRemRangeByScore(key, 0, currentTime - rateLimitWindow);

    // Count requests in the rate limit window
    const count = await client.zCount(key, currentTime - rateLimitWindow, currentTime);

    if (typeof count !== 'number' || count < 1) {
      // Add the current timestamp to the sorted set
      await client.zAdd(key, { score: currentTime, value: `${currentTime}` });

      // Set expiry for the key
      await client.expire(key, rateLimitWindow);

      return new Response(
        JSON.stringify({ allowed: true }),
        { status: 200 }
      );
    } else {
      // Rate limit exceeded
      return new Response(
        JSON.stringify({ allowed: false, message: "Rate limit exceeded. Please try again later." }),
        { status: 429 }
      );
    }
  } catch (error) {
    console.error("Redis operation failed:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error. Please try again later." }),
      { status: 500 }
    );
  }
}