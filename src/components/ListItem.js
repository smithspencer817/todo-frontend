import React from 'react';
import { Pencil, CheckCircleFill } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { toggleListItemCompleted } from '../actions/lists';

function ListItem(props){

    let date = new Date(props.listItem.createdAt)
    let [weekday, month, day, year, time] = date.toString().split(" ");
    time = time.slice(0,5);
    let [hour, minute] = time.split(":");
    let period = hour >= 12 ? "PM" : "AM"

    if (parseInt(hour) > 12) {
         hour = (parseInt(hour) - 12).toString()

    }

    return(
        <div className="individual-list-item-container">
            <div className="individual-list-item-info">
                <h4>{props.listItem.description}</h4>
                <p>{weekday} {month} {day}, {year} @ {hour}:{minute} {period}</p>
            </div>
            <div className="individual-list-item-actions">
                <Pencil></Pencil>
                {
                    props.listItem.completed ? 
                    <div className="complete-list-item-outline">
                        <CheckCircleFill 
                            className="complete-list-item" 
                            onClick={() => props.toggleListItemCompleted(props.currentWorkingList.id, props.listItem.id, false)}
                        ></CheckCircleFill>
                    </div>
                    :
                    <div className="incomplete-list-item" 
                        onClick={() => props.toggleListItemCompleted(props.currentWorkingList.id, props.listItem.id, true)}
                    ></div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentWorkingList: state.currentWorkingList
    }
}

export default connect(mapStateToProps, { toggleListItemCompleted })(ListItem);