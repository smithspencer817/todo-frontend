import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLists } from '../../actions/lists';
import { addCurrentUser } from '../../actions/user';

function LoginPage(props) {

    let history = useHistory();
    const [error, setError] = useState(null);

    // AUTHENTICATE USER
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
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(res => {
            if (res.message) {
                setError(res.message)
            } else {
                console.log(res.user)
                document.cookie = `authToken=${res.token}; Expires=Wed, 5 Oct 2050 14:28:00 GMT;`;
                props.addCurrentUser(res.user)
                props.fetchLists(res.user.id)
                history.push('/home')
            }
        })

        form.reset();
      }

    return (
        <div id="login-page">
            <div id="login-page-form-container">
                <div id="login-title-container">
                    <h1 id="login-title-text">List It!</h1>
                </div>
                <Form onSubmit={(e) => handleLogin(e)}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    {
                        error ?
                        <div className="login-page-error-box">
                            <p>{error}</p>
                        </div>
                        :
                        null
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

const mapDispatchToProps = dispatch => {
    return {
        fetchLists: userId => dispatch(fetchLists(userId)),
        addCurrentUser: user => dispatch(addCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);