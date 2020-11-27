import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createList } from '../../actions/lists';

function ListForm(props) {

    const [name, setName] = useState("");
    const [modalShow, setModalShow] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        const newList = {
            name: name,
            userId: props.user.id
        }
        props.createList(newList)
        setModalShow(false);
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
                New List
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
                Name your list
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Enter a name:</Form.Label>
                        <Form.Control placeholder="List Name..." onChange={(e) => setName(e.target.value)}/>
                        <Form.Text className="text-muted">
                        List name must be between 1 and 26 characters
                        </Form.Text>
                    </Form.Group>
                    <Form.Group id="new-list-form-button-container">
                    <Button type="submit" id="new-list-form-button">Add New List</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            </Modal>
        </div>
      );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { createList })(ListForm);