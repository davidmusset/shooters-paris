/**
 * Fonction serverless Vercel : réception du formulaire de contact / devis.
 * Envoie un e-mail via Resend (https://resend.com) si RESEND_API_KEY est définie.
 * Variables d'environnement (Vercel > Settings > Environment Variables) :
 *   RESEND_API_KEY  clé API Resend
 *   CONTACT_TO      destinataire (défaut : paris@theshootingbar.com)
 *   CONTACT_FROM    expéditeur vérifié chez Resend (défaut : onboarding@resend.dev, test uniquement)
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

const esc = (s: unknown) => String(s ?? '').replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c] as string);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body ?? {};
  const { name, email, phone, company, occasion, date, people, message, consent, website, lang } = body as Record<string, string>;

  // Piège à robots : le champ caché doit rester vide.
  if (website) return res.status(200).json({ ok: true });

  if (!name || !email || !message || !consent) {
    return res.status(400).json({ ok: false, error: 'missing_fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'invalid_email' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || 'paris@theshootingbar.com';
  const from = process.env.CONTACT_FROM || 'Shooters Paris <onboarding@resend.dev>';

  if (!apiKey) {
    console.error('RESEND_API_KEY manquante : formulaire reçu mais non envoyé', { name, email, occasion });
    return res.status(503).json({ ok: false, error: 'mail_not_configured' });
  }

  const subject = `[Site] ${occasion || 'Contact'} - ${name}${people ? ` (${people} pers.)` : ''}`;
  const rows: [string, string | undefined][] = [
    ['Nom', name],
    ['E-mail', email],
    ['Téléphone', phone],
    ['Entreprise', company],
    ['Occasion', occasion],
    ['Date souhaitée', date],
    ['Nombre de personnes', people],
    ['Langue', lang],
  ];
  const html = `
    <h2 style="font-family:Georgia,serif">Nouvelle demande depuis le site Shooters Paris</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`)
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;border-left:3px solid #ff7784;padding-left:12px">${esc(message)}</p>
  `;

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, html }),
  });

  if (!r.ok) {
    console.error('Resend error', r.status, await r.text());
    return res.status(502).json({ ok: false, error: 'mail_failed' });
  }
  return res.status(200).json({ ok: true });
}
