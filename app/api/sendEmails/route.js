import { Resend } from "resend";
import { PortfolioAutoreply } from "../../components/Contact/Email/portfolio-autoreply";

const resend = new Resend(process.env.RESEND_API_KEY);
const SENDER_NAME = process.env.SENDER_NAME;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const MY_EMAIL = process.env.MY_EMAIL;

export async function POST(req) {
  console.log("API Request Received:", req);
  const { name, email, message } = await req.json();

  console.log("Parsed Data:", { name, email, message });

  try {
    const {data, error} = await resend.batch.send([
      {
        from: `${SENDER_NAME} <${SENDER_EMAIL}>`,
        to: [email],
        subject: "Your message through Ryan Jung's portfolio has been delivered!",
        react: <PortfolioAutoreply name={name} />,
      },
      {
        from: `Portfolio <${CONTACT_EMAIL}>`,
        to: [MY_EMAIL],
        subject: "A new message from your portfolio!",
        html: `
          <p>from: ${name} (${email})</p>
          <p>${message}</p>`,
      },
    ]);

    if (error) {
      console.error("Error sending email:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email. Please try again later." }),
        { status: 500 }
      );
    }    

    return Response.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again later." }),
      { status: 500 }
    );
  }  
}
