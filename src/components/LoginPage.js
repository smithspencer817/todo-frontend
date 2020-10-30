import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';

function LoginPage(props) {

    let history = useHistory();

    useEffect(() => {
      if (props.user.id) {
        history.push('/home')
      }
    },[props.user.id, history])

    function handleLogin(e) {
        e.preventDefault();
        const form = e.target
        const loginInfo = {
          username: form[0].value,
          password: form[1].value
        }
        props.fetchUser(loginInfo)
        form.reset();
      }

    return (
        <div id="login-page">
            <div id="login-page-form-container">
                <div id="login-title-container">
                    <h1 id="login-title-text">To Do List</h1>
                </div>
                <Form onSubmit={(e) => handleLogin(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" />
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

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, { fetchUser })(LoginPage);