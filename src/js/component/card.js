import React, { useContext } from "react";

import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { store, actions } = useContext(Context);

  const obj = {
    uid: props.uid,
    name: props.name
}

  let card = 0;
  if (props.type === "people/") card = 0;
  else card = 1;

  const handleAdd = () => {
    actions.addFavorites(obj)
}

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">

      <div className="card h-100">


        <img
          className="card-img"
          src={
            props.type === "people/"
            ? `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`
            : `https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`
          }
          
              
        />


        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>

          {card === 0 ? (
            <p className="card-text ">
              Gender: {props.gender} <br />
              Hair Color: {props.hairColor} <br />
              Eye Color: {props.eyeColor}
            </p>
          ) : (
            <p className="card-text">
              Population: {props.population} <br />
              Terrain: {props.terrain} <br />
            </p>
          )}

          <Link to={props.type + props.uid} className="btn btn-outline-primary">
            Learn more!
          </Link>
          <a onClick={handleAdd} id="boton2" className="btn btn-outline-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="yellow"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </a>
        </div>
      </div>
      </div>
      </div>

    </>
  );
};

export default Card;
