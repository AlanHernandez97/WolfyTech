import './Heading.css'

function Heading() {
	return (
		<div className="heading flex items-center py-20 bg-slate-200 gap-12">
			<div className="text flex flex-col gap-2 mx-auto">
				<h2 className="text-5xl font-bold">Reparación de dispositivos electrónicos</h2>
				<p className="text-2xl">
					Somos expertos en la reparacion de computadoras, tabletas y teléfonos. {''}
					Ofrecemos un servicio rápido y de alta calidad para mantener tus dispositivos funcionando como nuevos.
				</p>
			</div>
			<div className="image">
				<img src="./RepairDevices.svg" alt="repair-devices" />
			</div>

		</div>
	)
}

export default Heading