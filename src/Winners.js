import React, { component } from "react";
import "./index.css";

// class Winners extends component() (

//     constructor(props) {
//      super(props);
//     }

//     render() {
//         return (
//             <div>
//       <h3>{props.fname}</h3>
//        <p>{props.cat}</p>
//      </div>
//         );
//     }
// )

const Winners = props => {
  return (
    <div className="win">
      <h3>Hullo {props.winner.firstname}</h3>
      <p>He was born in {props.winner.bornCountry}</p>
    </div>
  );
};

export default Winners;
