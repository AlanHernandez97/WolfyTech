import { NavLink } from "react-router-dom";


export default function Header() {
	return (
		<header className="bg-[#007cba]">
			<div className="px-5 py-1">
				<div className="flex justify-between items-center">
					<div>
						<img className="w-32" src="/logo-wolfytech.png" alt="logo-wolfytech" />
					</div>
					<nav className="flex gap-6">
						<NavLink
							to={'/'}
							className={({ isActive }) => isActive ? 'text-slate-300  uppercase font-bold' : 'taxt-black uppercase font-bold hover:underline'}
						>Inicio</NavLink>
						<NavLink
							to={'services'}
							className={({ isActive }) => isActive ? 'text-slate-300  uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Servicios</NavLink>
						<NavLink
							to={'prices'}
							className={({ isActive }) => isActive ? 'text-slate-300  uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Precios</NavLink>
						<NavLink
							to={'contact'}
							className={({ isActive }) => isActive ? 'text-slate-300  uppercase font-bold' : 'text-black uppercase font-bold hover:underline'}
						>Contacto</NavLink>
					</nav>
				</div>
			</div>
		</header>
	)
}
