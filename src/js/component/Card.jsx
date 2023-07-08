import React from "react";
import '../../styles/Card.css'

const Card = (promp) => {
    return(
        <div className={promp.classType}>
            <h1>{promp.content}</h1>
        </div>
    );
}

export default Card;