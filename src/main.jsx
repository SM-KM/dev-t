import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import Corp from './pages/Corp.jsx'
import Ideas from './pages/Ideas.jsx'
import Run from './pages/Run.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/home' element={<Home />} />
				<Route path='/corp' element={<Corp />} />
				<Route path='/ideas' element={<Ideas />} />
				<Route path='/run' element={<Run />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
