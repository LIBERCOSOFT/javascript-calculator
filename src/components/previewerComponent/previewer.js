import React from 'react';

const Previewer = (props) => {
    return(
        <div className="previewer-container">
            <h3> {props.arithmeticState} </h3>
            <h1 className="overflow"> {props.answerState} </h1>
        </div>
    );
}

export default Previewer