import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addList } from '../actions/lists';

function ListForm(props) {

    const [name, setName] = useState('');
    const [modalShow, setModalShow] = useState(false);

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
                console.log(list)
            } else {
                props.addList(list['list'])
            }
        })
        event.target.reset();
    }

    return(
        <div>
            <Button 
                className="profile-form-button"
                onClick={() => setModalShow(true)} 
                variant="light"
                size="md"
                block>
                Create New List
            </Button>
            <ListFormModal 
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

function ListFormModal(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addList })(ListForm);