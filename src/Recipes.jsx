import React from "react";
import './recipe.css'

const Recipes = ({ title, image, calories, ingredients }) => {
  return (
    <div className="recipes">
      <h1>{title}</h1>
      <img src={image} alt="" className="recipe-image" />
      <p>{calories} </p>
      <ol>
        {ingredients.map((e,index) => (
          <li key={index}>{e}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipes;
