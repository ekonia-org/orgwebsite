const RECIPIENT = 'info@ekonia.net';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, town, role, email, phone, message } = req.body || {};

  if (!name || !town || !role || !email) {
    return res.status(400).json({ error: 'Kérjük, töltse ki a kötelező mezőket.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Szerverhiba, próbálja meg később.' });
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL || 'Ekonia weboldal <onboarding@resend.dev>';

  const html = `
    <h2>Új megkeresés az ekonia.net oldalról</h2>
    <p><strong>Név:</strong> ${escapeHtml(name)}</p>
    <p><strong>Település:</strong> ${escapeHtml(town)}</p>
    <p><strong>Beosztás:</strong> ${escapeHtml(role)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefonszám:</strong> ${escapeHtml(phone || '-')}</p>
    <p><strong>Üzenet:</strong><br>${escapeHtml(message || '-').replace(/\n/g, '<br>')}</p>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [RECIPIENT],
        reply_to: email,
        subject: `Új megkeresés — ${town}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errBody = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errBody);
      return res.status(502).json({ error: 'Nem sikerült elküldeni az üzenetet.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return res.status(500).json({ error: 'Nem sikerült elküldeni az üzenetet.' });
  }
};
