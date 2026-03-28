import { useState } from "react";
import { Link } from "react-router";
export default function Corp() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		subject: '',
		msg: '',
	});

	const handlech = (e) => {
		const { name, value } = e.target;
		setForm(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handlemail = async (e) => {
		e.preventDefault();
		const data = await fetch('/api/server', {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: form.name, email: form.email, msg: form.msg })
		})
		const res = await data.json()
		console.log(res)
	}

	return (
		<>
			<div>
				<div>
					<input name="name" value={form.name} type="text" onChange={handlech} />
					<input name="email" value={form.email} type="email" onChange={handlech} />
				</div>
				<textarea name="msg" value={form.msg} type="text" onChange={handlech} />
				<button onClick={handlemail}>Talk?</button>
			</div>
			<h1>Corpo stuff, maybe just say that im cordial</h1>
			<p><Link to="/">Bye bye</Link></p>
		</>
	)
}
