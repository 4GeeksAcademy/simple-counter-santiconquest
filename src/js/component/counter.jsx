import React from 'react';

const Counter = (props) =>{
    return (
        <div  className="container d-flex justify-content-evenly bg-dark text-light fs-1">
            <div><i class="fas fa-clock"></i> </div>
	        <div>{props.digitSix}</div>
	        <div>{props.digitFive}</div>
	        <div>{props.digitFour}</div>
	        <div>{props.digitThree}</div>
            <div>{props.digitTwo}</div>
            <div>{props.digitOne}</div>
        </div>
    )
}


export default Counter;