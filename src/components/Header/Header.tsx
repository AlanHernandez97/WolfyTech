import { NavLink } from "react-router-dom";


export default function Header() {
	return (
		<header className="bg-cyan-500">
			<div className="mx-auto container px-5 py-1">
				<div className="flex justify-between items-center">
					<div>
						<img className="w-32" src="/logo-wolfytech.png" alt="logo-wolfytech" />
					</div>
					<nav className="flex gap-6">
						<NavLink
							to={'/'}
							className={({ isActive }) => isActive ? 'text-white uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Inicio</NavLink>
						<NavLink
							to={'services'}
							className={({ isActive }) => isActive ? 'text-white uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Servicios</NavLink>
						<NavLink
							to={'prices'}
							className={({ isActive }) => isActive ? 'text-white uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Precios</NavLink>
						<NavLink
							to={'contact'}
							className={({ isActive }) => isActive ? 'text-white uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Contacto</NavLink>
					</nav>
				</div>
			</div>
		</header>
	)
}
