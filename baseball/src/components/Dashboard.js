import React from 'react';

function Dashboard(props) {
    return(
        <div className='buttons'>
            <button onClick={props.ballCount}>Play Ball</button>
            <button onClick={props.foulCount}>Foul, try again...</button>
            <button onClick={props.strikeCount}>STRIIIIIKE!</button>
            <button onClick={props.hitCount}>Hit the ball!</button>            
        </div>
    )   
}

export default Dashboard;