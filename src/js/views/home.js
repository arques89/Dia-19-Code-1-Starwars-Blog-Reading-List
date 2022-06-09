import React from "react";
import { Card } from "../component/Card.jsx"
import "../../styles/home.css";
import "../../styles/Card.css";


export const Home = () => 
{ 
	const getPeople = () => {

		fetch(`https://www.swapi.tech/api/people/${uid}`)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.error(err))
		/*
		fetch(`https://www.swapi.tech/api/planets/${uid}`)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.error(err))
		*/
	
		}
	

	
	
	return (
	<div id="body">
	
	<h2 className="Characters">Characters</h2>
	<Card
		title="Luke Skywalker"
		
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>

	<h2 className="Planets">Planets</h2>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	<Card
		title="Luke Skywalker"
		description="Gender"
		buttonUrl=""
		imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1RFNxJMsvFX4tF8s37hK_2T2cRD176wHbpQ&usqp=CAU"
		buttonLabel="Learn more!"
	/>
	</div>
)};
