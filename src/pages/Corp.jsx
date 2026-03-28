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

		console.log(form.name)
	}
	return (
		<>
			<div>
				<div>
					<input name="name" value={form.name} type="text" onChange={handlech} />
					<input name="email" value={form.email} type="email" onChange={handlech} />
				</div>
			</div>
			<h1>Corpo stuff, maybe just say that im cordial</h1>
			<p><Link to="/">Bye bye</Link></p>
		</>
	)
}
