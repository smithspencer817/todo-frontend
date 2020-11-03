import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeCurrentUser } from '../actions/user'
import { removeCurrentLists } from '../actions/lists'

function LogOut(props) {

    const [show, setShow] = useState(false);
    let history = useHistory();

    function handleLogout() {
        props.removeCurrentUser()
        props.removeCurrentLists()
        document.cookie = "authToken=; Expires=Thu, 1 Jan 1970 14:28:00 GMT; path=/;"
        history.push('/login')
    }

    return(
        <div>
            <Button 
                variant="light"
                onClick={() => setShow(true)}
                size="sm"
                block
            >
                Log Out
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                <Modal.Title className="logout-modal">
                    We're sad to see you go, {props.user.username}...
                </Modal.Title>
                </Modal.Header>
                <Modal.Body className="logout-modal">
                    Are you sure you want to log out?
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Go Back
                </Button>
                <Button variant="danger" onClick={handleLogout}>
                    Log Out
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeCurrentUser: () => dispatch(removeCurrentUser()),
        removeCurrentLists: () => dispatch(removeCurrentLists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);