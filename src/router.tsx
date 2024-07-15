import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

const Index = lazy(() => import('./views/Index'))
const OurServices = lazy(() => import('./views/OurServices'))
const OurPrices = lazy(() => import('./views/OurPrices'));
const Contact = lazy(() => import("./views/Contact"))

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={
						<Suspense fallback='Cargando...'>
							<Index />
						</Suspense>
					} index />
					<Route path="/services" element={
						<Suspense fallback='Cargando...'>
							<OurServices />
						</Suspense>
					} />
					<Route path="/prices" element={
						<Suspense fallback='Cargando...'>
							<OurPrices />
						</Suspense>
					} />
					<Route path="/contact" element={
						<Suspense fallback='Cargando...'>
							<Contact />
						</Suspense>
					} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
