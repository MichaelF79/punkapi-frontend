import React from "react";
import styles from "./BeerColour.module.scss";

const BeerColour = (props) => {
  const colour = props.colour;

  const beerColourDescriber = (colour) => {
    if (colour < 10) return ` ${colour} EBC - Pale`;
    else if (colour < 13) return ` ${colour} EBC - Blonde`;
    else if (colour < 21) return ` ${colour} EBC - Gold`;
    else if (colour < 31) return ` ${colour} EBC - Amber`;
    else if (colour < 46) return ` ${colour} EBC - Copper`;
    else if (colour < 76) return ` ${colour} EBC - Brown`;
    else if (colour < 121) return ` ${colour} EBC - Dark Brown`;
    else return ` ${colour} EBC - Black`;
  };

  return (
    <li>
      {beerColourDescriber(colour)}
    </li>
  );
};

export default BeerColour;