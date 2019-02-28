import React from 'react';
import Tickets from './Tickets';

var masterTicketList = [
    {
        names: 'jesus and mary',
        location: '3b',
        issue: 'its broken'
    },
    {
        names: 'jerry n carrie',
        location: '30f',
        issue: 'scary'
    },
    {
        names: 'mary and madonna',
        location: '17b',
        issue: 'players ball and chain issues'
    },
];

function TicketList(){

    return (
        <div>
            <hr />
            {masterTicketList.map((ticket, index) =>
                <Tickets names={ticket.names}
                    location={ticket.location}
                    issue={ticket.issue} 
                    key={index}/>
            )}
        </div>
    );
}
    export default TicketList;