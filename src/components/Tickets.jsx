import React from 'react';

function Tickets(props) {
    return (
        <div>
            <h3>{props.location} - {props.names} </h3>
            <p><em>{props.issue}</em></p>
            <hr/>
        </div>
    );
}

export default Tickets;