import React from 'react';

export default function ListItem(props){

    let date = new Date(props.listItem.createdAt)
    let [weekday, month, day, year, time] = date.toString().split(" ");
    time = time.slice(0,5);

    return(
        <div className="individual-list-item-container">
            <div className="individual-list-item-info">
                <h4>{props.listItem.description}</h4>
                <p>Added: {weekday} {month} {day}, {year} @ {time}</p>
            </div>
            <div className="individual-list-item-actions">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}