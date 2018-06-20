import React from "react";
import "./card.css";

const Card = props => (
    <div className="card col-md-3 col-sm-4">
        <img className="" src={props.image} alt={props.name}  onClick={() => props.clickCard(props.name)} />
    </div>
);

export default Card;