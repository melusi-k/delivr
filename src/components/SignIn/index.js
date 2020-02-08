import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget';
import {
  Button,
  Form,
  Header,
  Input,
} from 'semantic-ui-react';

const SignInPage = () => (
  <div>
    <Header as="h1" textAlign="center">
       Sign In
     </Header>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
      const { email, password } = this.state;
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
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

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
        return (
          <Form onSubmit={this.onSubmit} widths='equal'>
            <Input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <Input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <Button disabled={isInvalid} type="submit">
              Sign In
            </Button>
            {error && <p>{error.message}</p>}
          </Form>
        );
      }
    }

    const SignInForm = compose(
      withRouter,
      withFirebase,
    )(SignInFormBase);
    export default SignInPage;
    export { SignInForm };
