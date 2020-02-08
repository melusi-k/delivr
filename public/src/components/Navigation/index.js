import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

import {Button} from 'semantic-ui-react';
import '../../App.css';

const Navigation = ({ authUser }) => (
  <div>
  <AuthUserContext.Consumer>
      {
        authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);


const NavigationAuth = () => (
  <ul className="ui form">
    <li className="nav-item">
    <Button>
      <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
      </Button>
    </li>
    <li className="nav-item">
    <Button>
      <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
      </Button>
    </li>
    <li className="nav-item">
     <Button>
     <Link className="nav-link" to={ROUTES.ADMIN}>Admin</Link>
     </Button>
   </li>
    <li className="nav-item">
      <SignOutButton fluid="true"/>
    </li>
  </ul>
);
const NavigationNonAuth = () => (
  <ul className="ui button navbar">
    <li className="nav-item">
    <Button>
      <Link className="nav-link" to={ROUTES.LANDING}>Landing</Link>
      </Button>
    </li >
    <li className="nav-item">
    <Button>
      <Link  className="nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
      </Button>
    </li>
  </ul>
);
export default Navigation;
