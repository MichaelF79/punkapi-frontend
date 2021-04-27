import React from "react";

const BeerBitterness = (props) => {
  const bitterness = props.bitterness;

  const bitternessDescriber = (ibu) => {
    if (ibu < 16) return ` ${ibu} IBU - Slightly Bitter`;
    else if (ibu < 51) return ` ${ibu} IBU - Medium Bitter`;
    else if (ibu < 71) return ` ${ibu} IBU - Bitter`;
    else return ` ${ibu} IBU - Very Bitter`;
  };

  return (
    <li>
      {bitternessDescriber(bitterness)}
    </li>
  );
};

export default BeerBitterness;