import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginPage(props) {
    return (
        <div id="login-page">
            <div id="login-page-form-container">
                <div id="login-title-container">
                    <h1 id="login-title-text">Do Me!</h1>
                </div>
                <Form onSubmit={(e) => props.handleLogin(e)}>
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
    )
}
