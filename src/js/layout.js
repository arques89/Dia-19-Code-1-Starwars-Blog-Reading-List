import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CharacterDetails } from "./views/characterDetails";
import { PlanetsDetails } from "./views/planetDetails";

import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	
	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						
						<Route exact path="/people/:id" element={<CharacterDetails />} />
						<Route exact path="/planets/:id" element={<PlanetsDetails />} />
						
						<Route path="*" element={<h1>Not found</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
