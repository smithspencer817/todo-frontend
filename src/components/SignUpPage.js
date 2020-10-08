import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SignUpPage() {

    function handleNewUser(e) {
        e.preventDefault();
        const form = e.target;
        const newUserInfo = {
          username: form[0].value,
          password: form[1].value
        }
        console.log(newUserInfo)
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
    )
}