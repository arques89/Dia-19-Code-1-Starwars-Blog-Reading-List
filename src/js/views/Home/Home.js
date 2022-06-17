import React , { useState, useEffect } from "react";

import CharacterCard from "../../component/Character/Character.jsx"
import PlanetCard from '../../component/Planets/Planets.jsx'
import Person from '../Person/Person.js'
import "./Home.css";




export const Home = () => {
	
	

	const [characters, setCharacters] = useState([]);
	
    const fetchCharacters = () => {
        	fetch('https://www.swapi.tech/api/people/')
                .then((response) => response.json())//Convertimos la data a JSON
                .then(data => setCharacters(data.results))//REcibimos la data y lo seteamos en useEffect
                .catch((err) => console.error(err));//Si hubiera algun error al recibir la data saltaria un mensaje de error
    };

	const [planets , setPlanets] = useState([]);

	const fetchPlanets = () => {
		fetch('https://www.swapi.tech/api/planets/')
			.then((response) => response.json())
			.then((data) => setPlanets(data.results))
			.catch((error) => console.log(error))
	}

	const [person , setPerson] = useState([]);

    const fetchPerson = (path) => {
        fetch('https://www.swapi.tech/api/people/' + path)
            .then((response) => response.json())
            .then(data => setPerson(data.results))
            .catch((error) => console.log(error));
    };

	useEffect(() => {
		fetchCharacters();
		fetchPlanets()
		fetchPerson('/person' + id)
	}, []); 
	
	return (
	<div id="body">
	
	<h2 className="Characters">Characters</h2>
	<CharacterCard
		characters={characters}
	/>

	<h2 className="Planets">Planets</h2>
	<PlanetCard
		planets={planets}
		description="Gender"
	/>

	</div>
)};
