import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png"></img>  </span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
