import React, { useContext } from "react"
import Card from "../component/card"
import {Context} from "../store/appContext.js"

const Planets = () => {
    const {store, actions} = useContext(Context)

    return (
            <>
            <div className="container w-75 mt-3 containerPrinc">
            <p className="h1 text-danger text-center my-4">Planets</p>
            <div className="d-flex scrollmenu p-3">
                {
                    store.planetsData.length >0 ? store.planetsData.map((item, index) => {
                        return(
                            <Card
                                key={index}
                                name={item.properties.name}
                                population={item.properties.population}
                                terrain={item.properties.terrain}
                                uid={item.uid}
                                type={"planets/"}
                                />
                                )  
                            }) : 
                            <div className="spinner-grow text-success m-auto" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
            </div>
        </>
    )
}

export default Planets;