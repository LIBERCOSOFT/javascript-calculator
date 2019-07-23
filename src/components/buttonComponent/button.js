import React from "react";

const Button = (props) => {
    return(
        <div>
        <div className="grid-container">
            <button id="ac" className="ac" onClick={props.acClick}>AC</button>
            <button id="divide" onClick={props.buttonClick}>/</button>
            <button id="multiply" onClick={props.buttonClick}>*</button>
            <button id="seven" onClick={props.buttonClick}>7</button>
            <button id="eight" onClick={props.buttonClick}>8</button>
            <button id="nine" onClick={props.buttonClick}>9</button>
            <button id="minus" onClick={props.buttonClick}>-</button>
            <button id="four" onClick={props.buttonClick}>4</button>
            <button id="five" onClick={props.buttonClick}>5</button>
            <button id="six" onClick={props.buttonClick}>6</button>
            <button id="plus" onClick={props.buttonClick}>+</button>
            <button id="one" onClick={props.buttonClick}>1</button>
            <button id="two" onClick={props.buttonClick}>2</button>
            <button id="three" onClick={props.buttonClick}>3</button>
            <button id="zero" onClick={props.buttonClick} className="zero">0</button>
            <button id="decimal" onClick={props.buttonClick} className="decimal">.</button>
            <button id="equals" onClick={props.equalsClick} className="equals">=</button>
        </div>
        <p className="heading">coded and designed by <a href="https://github.com/OLADIPO-K">OLADIPO-K</a></p>
        </div>
    );
}

export default Button