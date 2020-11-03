import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/user';


function SignUpPage(props) {

    let history = useHistory();

    useEffect(() => {
        if (props.user.id) {
          history.push('/home')
        }
      },[props.user.id, history])

    function handleNewUser(e) {
        e.preventDefault();
        const form = e.target;
        const newUserInfo = {
            firstName: form[0].value,
            lastName: form[1].value,
            username: form[2].value,
            password: form[3].value
        }
        props.createNewUser(newUserInfo)
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
                        <Form.Text className="text-muted sign-up-page-fine-print">
                        Between 1 and 26 characters
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" />
                        <Form.Text className="text-muted sign-up-page-fine-print">
                        Between 1 and 26 characters
                        </Form.Text>
                    </Form.Group>
                    {
                        props.user.error === "" ?
                        null
                        :
                        <div className="login-page-error-box">
                            <p>{props.user.error}</p>
                        </div>
                    }
                    <Button className="profile-form-button" variant="light" type="submit" size="md" block>
                        Create Account
                    </Button>
                </Form>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
  }

export default connect(mapStateToProps, { createNewUser })(SignUpPage);
