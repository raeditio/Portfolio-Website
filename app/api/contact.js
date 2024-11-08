export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      try {
        // Here, you would integrate with an email service like SendGrid, Mailgun, or Nodemailer
        // For demonstration, we'll just return a success message
  
        console.log(`Message from ${name} <${email}>: ${message}`);
        res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Error sending message' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  