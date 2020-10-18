import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCurrentUser } from '../actions/user';

function SignUpPage(props) {

    let history = useHistory();

    function handleNewUser(e) {
        e.preventDefault();
        const form = e.target;
        const newUserInfo = {
            first_name: form[0].value,
            last_name: form[1].value,
            username: form[2].value,
            password: form[3].value
        }
        fetch('http://localhost:3000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newUserInfo)
        })
        .then(res => res.json())
        .then(res => {
            if (res[0] !== undefined) {
                console.log('was not valid')
            } else {
                fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(res)
                })
                .then(res => res.json())
                .then(res => {
                    document.cookie = `authToken=${res.token}`;
                    props.addCurrentUser(res.user);
                    history.push('/home');
                });
            }
        })
        form.reset();
      }

    return (
        <div id="login-page">
            <div id="login-page-form-container">
                <div id="login-title-container">
                    <h1 id="login-title-text">Sign Up!</h1>
                </div>
                <Form onSubmit={(e) => handleNewUser(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Button className="profile-form-button" variant="light" type="submit" size="md" block>
                        Create Account
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default connect(null, { addCurrentUser })(SignUpPage);
