import React from 'react'
import { useParams } from "react-router";
import './Person.css'

const Person = () =>{
    
    const { id } = useParams()
    
   
    return(
        <>
    {/* {person.map((item , index) => ( */}
        <div className='container-fluid'>
            <div className='imgData'>
                <div className=''>
                    <img className='imagenDEscription' />
                </div>
                <div className='data'>       
                    <h1>Luke Skywalker</h1>
                    <p>A person within the Star Wars universe</p>
                </div>
            </div>
            <hr className='hr'/>
            <div className='features'>
            <div className='id'>
                
                <h5 className='uno'>Name</h5>
                <div className="vl" />
                <h5 className=''>Birth Year</h5>
                <h5 className='titulo'>Gender</h5>
                <h5 className='dos'>Height</h5>
                <h5 className='titulo'>Skin Color</h5>
                <h5 className='titulo'>Eye Color</h5>
            </div>
            
            <div className='id'>
                <h5 className=''>Name</h5>
                <div className="vl" />
                <h5 className=''>Resp Api</h5>
                <h5 className=''>Resp Api</h5>
                <h5 className=''>Resp Api</h5>
                <h5 className=''>Resp Api</h5>
                <h5 className=''>Resp Api</h5>
            </div>
            </div>
        </div>
{/* ))} */}
        </>
    );
}

export default Person