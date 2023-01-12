const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			characterData: [],
			planets: [],
			planetsData: [],
			favorites: []
		},
		actions: {

			getCharacters: () =>
			{
					fetch("https://www.swapi.tech/api/people/")

				.then(res => 
				{
					if(!res.ok) throw Error(res.statusText)
					return res.json()
				})
				.then(data => 
				{
					setStore({character: data.results})
				})
				
			},
		
			getAllCharacters: () => {
				
				for(let i = 1; i <= 10; i++){

					fetch(`https://www.swapi.tech/api/people/${i}`)
					.then(res => {
						if(!res.ok) throw Error(res.statusText)
						return res.json()
					})
					.then(data => {
						
						setStore({characterData: getStore().characterData.concat(data.result) })
						
					})
				}
			},

			getPlanets: () => {

				fetch(`https://www.swapi.tech/api/planets/`)

				.then(res => 
				{
					if(!res.ok) throw Error(res.statusText)
					return res.json()
				})
				.then(data => 
				{	
					setStore({planets: data.results})
				})
			},

			getAllPlanets: () => {

				for(let i = 1; i <= 10; i++){

					fetch(`https://www.swapi.tech/api/planets/${i}`)
					.then(res => {
						if(!res.ok) throw Error(res.statusText)
						
						return res.json()
					})
					.then(data => {
						setStore({planetsData: getStore().planetsData.concat(data.result) })
					})
				}
			},
			
			addFavorites: (obj) => {
				setStore({favorites: [...getStore().favorites, obj]})
			},

			delFavorites: (array) => {
				setStore({favorites: array})
			}

		}
		}
	};





export default getState;
