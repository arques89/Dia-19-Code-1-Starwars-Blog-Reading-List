import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
import "../../styles/Card.css";


export const Card = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
<div id="hola" className="card">
  <img src={props.imageUrl} className="card-img"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>

	
	<a href={props.buttonUrl} id="boton1" className="btn btn-outline-primary">{props.buttonLabel}</a>
	
	<a href={props.buttonUrl} id="boton2" className="btn btn-outline-warning">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-heart" viewBox="0 0 16 16">
			<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
		</svg>
	</a>
  </div>
</div>
	);
};

    Card.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	imageUrl: PropType.string,
	buttonLabel: PropType.string,

	// 2) add here the new properties into the proptypes object
};

// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<Card />, document.querySelector("#app"));