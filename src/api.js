import React , { useEffect } from "react"

const getPeople = () => {

    const [datos , setDatos] = React.useState(null)

    useEffect(() => {
        console.log("useEffect")


    }, [])

    const obtenerDatos = fetch(`https://www.swapi.tech/api/people/${uid}`)
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
    export default{
        getPeople
    }