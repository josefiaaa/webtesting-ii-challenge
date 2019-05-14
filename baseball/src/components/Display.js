import React from 'react';

function Display(props) {
    return(
        <div className='display'>
            <h2>Balls:{props.ball}</h2>
            <h2>Strikes:{props.strike}</h2>
        </div>
    )   
}

export default Display;