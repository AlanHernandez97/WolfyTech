import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './views/Index';
import OurPrices from "./views/OurPrices";
import Layout from "./layouts/Layout";
import Contact from "./views/Contact";
import OurServices from "./views/OurServices";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Index />} index />
					<Route path="/services" element={<OurServices />} />
					<Route path="/prices" element={<OurPrices />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
