import "./Navbar.css"
import { Link } from "react-router"

export default function Navbar({ children }) {
	return (
		<>
			<div className="container-navbar">
				<div className="link">
					<p><Link to="/home">
						Jump here (click me pls)
					</Link></p>
					<p><Link to="/corp">
						About me, just the coorporate version
					</Link></p>

					<p><Link to="/ideas">
						Almost project, maybe ideas, (havent done a thing)
					</Link></p>
					<p><Link to="run">
						Wanna go running?
					</Link></p>

				</div>
			</div>
			{children}
		</>
	)
}
