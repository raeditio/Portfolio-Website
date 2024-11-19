import { Resend } from "resend";
import { PortfolioAutoreply } from "../../components/Contact/Email/portfolio-autoreply";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST (req) {
  const { name, email, message } = await req.json();

  try {
    const { data, error } = await resend.batch.send([
    {
      from: 'ryankwjung@gmail.com',
      to: {email},
      subject: "Your message through Ryan Jung's portfolio has been delivered!",
      react: PortfolioAutoreply({name}),
    },
    {
      from: {email},
      to: 'ryankwjung@gmail.com',
      subject: 'A new message from your portfolio!',
      html: {message},
    },
    ]);
    
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};