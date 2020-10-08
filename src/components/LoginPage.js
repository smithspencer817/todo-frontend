import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCurrentUser } from '../actions/user';

function LoginPage(props) {

    let history = useHistory();

    function handleLogin(e) {
        e.preventDefault();
        const form = e.target
        const loginInfo = {
          username: form[0].value,
          password: form[1].value
        }
        
        fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(res => {
          if (res === 'no match') {
            console.log('not found');
          } else {
            document.cookie = `authToken=${res.token}`;
            props.addCurrentUser(res.user);
            history.push('/home');
          }
        });
        form.reset();
      }

    return (
        <div id="login-page">
            <div id="login-page-form-container">
                <div id="login-title-container">
                    <h1 id="login-title-text">To Do</h1>
                </div>
                <Form onSubmit={(e) => handleLogin(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                    <Button className="profile-form-button" variant="light" type="submit" size="md" block>
                        Sign In
                    </Button>
                    <Button as={Link} to="/sign-up" className="profile-form-button" variant="light" type="submit" size="md" block>
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default connect(null, { addCurrentUser })(LoginPage);