import React from "react"
import { useContext } from "react"
import { Context } from "../store/appContext.js"
import {useParams} from "react-router-dom"

import "../../styles/characterDetails.css"

function CharacterDetails(){

    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const uidFake = Number(id)

    let objDetail = {}

    for(let i in store.characterData){
        if(store.characterData[i].uid == uidFake){
            objDetail = store.characterData[i]
        }
    }


    return (
<div className='container-fluid'>
<div className='imgData'>
    <div className=''>
    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="imgDetail img-fluid col-6" alt="people_detail_img"/>
    </div>
    <div className='data'>       
        <h1>{objDetail.properties.name}</h1>
        <p>A person within the Star Wars universe</p>
    </div>
</div>
<hr className='hr'/>
<div className='features'>

<div className='di'>    
    <h5 className='uno'>Name</h5>
    <div className="vl" />
    <h5 className=''>Birth Year</h5>
    <h5 className='titulo'>Gender</h5>
    <h5 className='dos'>Height</h5>
    <h5 className='titulo'>Skin Color</h5>
    <h5 className='titulo'>Eye Color</h5>
</div>

<div className='id'>
    <h5 className=''>{objDetail.properties.name}</h5>
    <div className="vl" />
    <h5 className=''>{objDetail.properties.birth_year}</h5>
    <h5 className=''>{objDetail.properties.gender}</h5>
    <h5 className=''>{objDetail.properties.height}</h5>
    <h5 className=''>{objDetail.properties.skin_color}</h5>
    <h5 className=''>{objDetail.properties.eye_color}</h5>
</div>
</div>
</div>

    )
}

export {CharacterDetails}