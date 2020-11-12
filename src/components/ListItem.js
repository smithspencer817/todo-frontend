import React, { useState } from 'react';
import { Pencil, CheckCircleFill } from 'react-bootstrap-icons';

export default function ListItem(props){

    let date = new Date(props.listItem.createdAt)
    let [weekday, month, day, year, time] = date.toString().split(" ");
    time = time.slice(0,5);
    let [hour, minute] = time.split(":");
    let period = hour >= 12 ? "PM" : "AM"

    if (parseInt(hour) > 12) {
         hour = (parseInt(hour) - 12).toString()

    }

    let [complete, toggleCompletion] = useState(false);

    return(
        <div className="individual-list-item-container">
            <div className="individual-list-item-info">
                <h4>{props.listItem.description}</h4>
                <p>{weekday} {month} {day}, {year} @ {hour}:{minute} {period}</p>
            </div>
            <div className="individual-list-item-actions">
                <Pencil></Pencil>
                {
                    complete ? 
                    <CheckCircleFill 
                        className="complete-list-item" 
                        onClick={() => toggleCompletion(false)}
                    ></CheckCircleFill>
                    :
                    <div className="incomplete-list-item" 
                        onClick={() => toggleCompletion(true)}
                    ></div>
                }
            </div>
        </div>
    )
}