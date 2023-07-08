import React from "react";
import '../../styles/Card.css'
import Home from "./Home";
import { checkPropTypes } from "prop-types";
import  PropTypes  from "prop-types";


function Card(props){
    return(
        <div className={props.classType}>
            <h1>{props.content}</h1>
        </div>
    );
}

Card.propTypes= {
    classType : PropTypes.string,
    content : PropTypes.number,
};




export default Card;