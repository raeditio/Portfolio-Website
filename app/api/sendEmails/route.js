import { Resend } from "resend";
import { PortfolioAutoreply } from "../../components/Contact/Email/portfolio-autoreply";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_EMAIL = process.env.SENDER_EMAIL;


export async function POST(req) {
  const { name, email, message } = await req.json();

  // Validate input
  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.batch.send([
      {
        from: `Ryan Jung <${SENDER_EMAIL}>`,
        to: [email],
        subject: "Your message through Ryan Jung's portfolio has been delivered!",
        react: <PortfolioAutoreply name={name} />,
      },
      {
        from: email,
        to: [SENDER_EMAIL],
        subject: "A new message from your portfolio!",
        html: `<p>${message}</p>`,
      },
    ]);

    if (error) {
      console.error("Error sending email:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
