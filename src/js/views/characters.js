import React, { useContext } from "react"
import Card from "../component/card"
import {Context} from "../store/appContext.js"


const Character = () => {
    const {store, actions} = useContext(Context)



    return (
            <>
                    <div className="container w-75 mt-3 containerPrinc">
            <p className="h1 text-danger text-center my-4">Characters</p>
            <div className="d-flex scrollmenu p-3">
                {
                    store.characterData.length >0 ? store.characterData.map((item, index) => {
                        return(
                            <Card
                                key={index}
                                name={item.properties.name}
                                gender={item.properties.gender}
                                hairColor={item.properties.hair_color}
                                eyeColor={item.properties.eye_color}
                                uid={item.uid}
                                type={"people/"}
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

export default Character;