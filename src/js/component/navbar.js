import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const deleteFav = (name) => {
    let newArray = store.favorites.filter((item) => item.name != name);

    actions.delFavorites(newArray);
  };
//Contador en el bton favorites
  let count = store.favorites.length;

  return (
    <nav className="navbar navbar-dark bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img src="https://w7.pngwing.com/pngs/792/718/png-transparent-skellig-michael-chewbacca-star-wars-computer-icons-star-wars-text-logo-desktop-wallpaper.png"></img>{" "}
        </span>
      </Link>
      <div className="btn-group dropstart ms-auto me-2">
        <button
          className="btn btn-primary"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {count} Favorites
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark px-4 mx-4"
          aria-labelledby="dropdownMenuButton1"
        >
          {store.favorites.map((item, index) => {
            return (
              <li className="dropdown-item dropItem" key={index.toString()}>
                {item.name}
                <button
                  onClick={() => deleteFav(item.name)}
                  className="btn btn-outline-danger ms-1"
                >
                  <strong>X</strong>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
