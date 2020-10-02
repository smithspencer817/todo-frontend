import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SignUpPage(props) {
    return (
        <div id="login-page">
            <div id="login-page-form-container">
                <div id="login-title-container">
                    <h1 id="login-title-text">Sign Up!</h1>
                </div>
                <Form onSubmit={(e) => props.handleNewUser(e)}>
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