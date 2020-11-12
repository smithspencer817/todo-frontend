import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addListItem } from '../actions/lists';

function ListItemForm(props) {

    const [description, setDescription] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const token = document.cookie.slice(10);
        const newListItem = {
            description: description,
            listId: props.currentWorkingList.id
        }
        fetch('http://localhost:3000/api/list-items', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newListItem)
        })
        .then(res => res.json())
        .then(listItem => {
            if (listItem.length) {
                setError(listItem[0].message)
            } else {
                props.addListItem(listItem)
                setTimeout(() => {
                    setModalShow(false)
                    setError("")
                }, 500)
            }
        })
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
                    <Form.Group id="new-list-form-button-container">
                    {(() => {
                        switch (error) {
                            case "": return null;
                            default: return <Alert variant="danger">{error}</Alert>;
                        }
                    })()}
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

export default connect(mapStateToProps, { addListItem })(ListItemForm);