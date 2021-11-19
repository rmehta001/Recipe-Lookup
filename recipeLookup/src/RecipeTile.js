import React from 'react';
import "./RecipeTile.css";

export default function RecipeTile({recipeProp}) {
    return (
        recipeProp["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        !=null && (
        <div 
          className="recipeTile" onClick={() => {
            window.open(recipeProp["recipe"]["url"]);
        }}
        > 
        <img className="recipeTile__img" src={recipeProp["recipe"]["image"]}></img>
           <p className="recipeTile__name">{recipeProp["recipe"]["label"]}</p>
           
        </div>
        )
    );
}
