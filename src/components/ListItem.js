import React, { useState } from 'react';
import { Pencil, CheckCircleFill, Trash } from 'react-bootstrap-icons';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleListItemCompleted, deleteListItem, updateListItem } from '../actions/lists';

function ListItem(props){

    const [description, setDescription] = useState("");
    const [modalShow, setModalShow] = useState(false);

    function convertDate(datetime) {
        let date = new Date(datetime)
        let [weekday, month, day, year, time] = date.toString().split(" ");
        time = time.slice(0,5);
        let [hour, minute] = time.split(":");
        let period = hour >= 12 ? "PM" : "AM"
        if (parseInt(hour) > 12) {
            hour = (parseInt(hour) - 12).toString()
        }
        return { year, month, weekday, day, hour, minute, period }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.updateListItem(props.currentWorkingList.id, props.listItem.id, description)
        setTimeout(() => {
            setModalShow(false)
        }, 500)
        event.target.reset();
    }

    const createdAt = convertDate(props.listItem.createdAt)
    // const updatedAt = convertDate(props.listItem.updatedAt)

    return(
        <div>
            <div className="individual-list-item-container">
                <div className="individual-list-item-info">
                    <h6>{props.listItem.description}</h6>
                    <p>{createdAt.weekday} {createdAt.month} {createdAt.day}, {createdAt.year} @ {createdAt.hour}:{createdAt.minute} {createdAt.period}</p>
                </div>
                <div className="individual-list-item-actions">
                    <div className="individual-list-item-action-icons">
                        <Trash onClick={() => props.deleteListItem(props.currentWorkingList.id, props.listItem.id)}></Trash>
                        <Pencil onClick={() => setModalShow(true)}></Pencil>
                    </div>
                    <div>
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
            </div>
            <div>
                <Modal
                size="lg"
                show={modalShow}
                backdrop="static"
                onHide={() => setModalShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>
                    {props.listItem.description}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Edit description:</Form.Label>
                            <Form.Control placeholder={`${props.listItem.description}`} onChange={(e) => setDescription(e.target.value)}/>
                            <Form.Text className="text-muted">
                            Description must be between 1 and 26 characters
                            </Form.Text>
                        </Form.Group>
                        <Form.Group id="list-item-edit-form-button-container">
                            <Button type="submit" id="list-item-edit-form-button">Save Changes</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentWorkingList: state.currentWorkingList
    }
}

export default connect(mapStateToProps, { toggleListItemCompleted, deleteListItem, updateListItem })(ListItem);