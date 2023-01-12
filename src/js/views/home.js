import React from "react";

import Character from "./characters";
import Planets from "./planets";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Character />
      </div>
      <div className="container mt-5">
        <Planets />
      </div>
    </>
  );
};
