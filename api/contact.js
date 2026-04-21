import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log(`[API] ${req.method} request received`);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, name, email, subject, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required' });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio SM <onboarding@resend.dev>',
      to: ['sylvain.mbeumou@gmail.com'],
      reply_to: email,
      subject: `[Portfolio SM] ${subject || 'Nouveau contact'}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #14b8a6;">Nouveau message de contact</h2>
          <p><strong>De:</strong> ${firstName} ${name} (${email})</p>
          <p><strong>Objet:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error('[API] Resend error:', error);
      return res.status(400).json({ error });
    }

    console.log('[API] Email sent successfully');
    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error('[API] Server error:', err);
    return res.status(500).json({ error: err.message });
  }
}
