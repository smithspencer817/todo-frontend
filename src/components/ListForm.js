import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addList } from '../actions/lists';

function ListForm(props) {

    const [name, setName] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const token = document.cookie.slice(10);
        const newList = {
            name: name,
            user_id: props.user.id
        }
        fetch('http://localhost:3000/api/lists', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(newList)
        })
        .then(res => res.json())
        .then(list => {
            if (list.length) {
                setError(list[0].message)
            } else {
                props.addList(list["list"])
                setError("New List Created")
                setTimeout(() => {
                    setError("")
                    setModalShow(false)
                }, 2000)
            }
        })
        event.target.reset();
    }

    return (
        <div>
            <Button 
                onClick={() => setModalShow(true)} 
                variant="light"
                size="md"
                block>
                Create New List
            </Button>
            <Modal
            id="new-list-modal"
            size="lg"
            show={modalShow}
            onHide={() => setModalShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                What do you want to name your list?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e) }>
                    <Form.Group>
                        <Form.Label>Enter a name:</Form.Label>
                        <Form.Control placeholder="List Name..." onChange={(e) => setName(e.target.value)}/>
                        <Form.Text className="text-muted">
                        List name must be between 1 and 26 characters
                        </Form.Text>
                    </Form.Group>
                    {(() => {
                        switch (error) {
                            case "": return null;
                            case "New List Created": return <Alert variant="success">{error}</Alert>;
                            default: return <Alert variant="danger">{error}</Alert>;
                        }
                    })()}
                    <Button variant="success" type="submit" className="new-list-form-button">Submit</Button>
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

export default connect(mapStateToProps, { addList })(ListForm);