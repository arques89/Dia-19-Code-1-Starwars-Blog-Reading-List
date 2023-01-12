import React from "react"
import { useContext } from "react"
import { Context } from "../store/appContext.js"
import {useParams} from "react-router-dom"

function PlanetsDetails(){

    const {store, actions} = useContext(Context)
    const {id} = useParams()
    const uidFake = Number(id)

    let objDetail = {}

    
    

    for(let i in store.planetsData){
        if(store.planetsData[i].uid == uidFake){
            objDetail = store.planetsData[i]

        }
    }

    return (
<div className='container-fluid'>
<div className='imgData'>
    <div className=''>
    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="imgDetail img-fluid col-6" alt="planet_detail_img"/>
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
    <h5 className=''>Climate</h5>
    <h5 className='titulo'>Population</h5>
    <h5 className='dos'>Orbital Period</h5>
    <h5 className='titulo'>Rotation Period</h5>
    <h5 className='titulo'>Diameter</h5>
</div>

<div className='id'>
    <h5 className=''>{objDetail.properties.name}</h5>
    <div className="vl" />
    <h5 className=''>{objDetail.properties.climate}</h5>
    <h5 className=''>{objDetail.properties.population}</h5>
    <h5 className=''>{objDetail.properties.orbital_period}</h5>
    <h5 className=''>{objDetail.properties.rotation_period}</h5>
    <h5 className=''>{objDetail.properties.diameter}</h5>
</div>
</div>
</div>
    )
}

export {PlanetsDetails}