import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addList } from '../actions/lists';

function ListForm(props) {

    const [name, setName] = useState('');

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
        .then(json => props.addList(json['list']))
        event.target.reset();
    }

    return(
        <div id="list-form">
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="List Name..."
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Button className="profile-form-button" variant="light" type="submit" size="md" block>
                    Create List
                </Button>
            </Form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { addList })(ListForm);