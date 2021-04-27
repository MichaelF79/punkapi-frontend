import React from "react";

const BeerStrength = (props) => {
  
  const strengthDescriber = (abv) => {
    if (abv < 4) return `${abv}% ABV - Weak`;
    else if (abv < 5) return `${abv}% ABV - Average`;
    else if (abv < 10) return `${abv}% ABV - Strong`;
    else return `${abv}% ABV - Lethal`;
  }

  return <li>{strengthDescriber(props.strength)}</li>;
};

export default BeerStrength;
