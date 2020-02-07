import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Form,
  Header,
  Input,
} from 'semantic-ui-react';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUpPage = () => (
  <div>
  <Header as="h1" textAlign="center">
     Sign Up
   </Header>
    <SignUpForm />
  </div>
);

class SignUpFormBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
  .doCreateUserWithEmailAndPassword(email, passwordOne)
  .then(authUser => {
    // Create a user in your Firebase realtime database
    return this.props.firebase
      .user(authUser.user.uid)
      .set({
        username,
        email,
      });
  })
  .then(() => {
    this.setState({ ...INITIAL_STATE });
    this.props.history.push(ROUTES.HOME);
  })
  .catch(error => {
    this.setState({ error });
  });
event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render()
  {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Form onSubmit={this.onSubmit} widths='equal'>
      <Input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign Up
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
    );
  };
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink };
