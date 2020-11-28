import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createListItem } from '../../actions/lists';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function ListItemForm(props) {

    const [description, setDescription] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [calendarShow, setCalendarShow] = useState(false);
    const [dateState, setDateState] = useState(null);

    const changeDate = (e) => {
        setDateState(e)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newListItem = {
            description: description,
            listId: props.currentWorkingList.id
        }
        props.createListItem(newListItem)
        setModalShow(false)
        event.target.reset();
    }

    return (
        <div>
            <Button 
                onClick={() => setModalShow(true)} 
                variant="light"
                size="lg"
                block
            >
                Add Item
            </Button>
            <Modal
            id="new-list-modal"
            size="lg"
            show={modalShow}
            backdrop="static"
            onHide={() => setModalShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Give your item a description
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e) }>
                    <Form.Group>
                        <Form.Label>Enter a description:</Form.Label>
                        <Form.Control placeholder="Description..." onChange={(e) => setDescription(e.target.value)}/>
                        <Form.Text className="text-muted">
                        Description must be between 1 and 26 characters
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        {
                            calendarShow ?
                            <div>
                                <div id="due-date-header">
                                    <Form.Label>Due Date: <b>{moment(dateState).format('MMMM Do YYYY')}</b></Form.Label>
                                </div>
                                <Calendar
                                    value={dateState}
                                    onChange={changeDate}
                                />
                            </div>
                            :
                            <button id="show-calendar-button" onClick={() => setCalendarShow(true)}>Add Due Date</button>
                        }
                    </Form.Group>
                    <Form.Group id="new-list-form-button-container">
                        <Button type="submit" id="new-list-form-button">Add Item</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            </Modal>
        </div>
      );
}

const mapStateToProps = state => {
    return {
        currentWorkingList: state.currentWorkingList
    }
}

export default connect(mapStateToProps, { createListItem })(ListItemForm);