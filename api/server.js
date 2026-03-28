import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function hand(req, res) {
	if (res.method !== "POST") return res.status(404).json({ message: "wrong method" })
	try {
		const { name, subject, msg, email } = req.body
		const { data, error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['msantiagovargas2@gmail.com'],
			subject: 'Hello World',
			html: `<p>${msg}</p>`,
		})

		if (error) {
			return console.error({ error });
		}
		return res.status(200).json({ data });
	} catch (error) {
		return res.status(502).json(error)
	}
}
