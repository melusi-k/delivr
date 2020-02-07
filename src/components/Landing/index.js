import React from 'react';
import {Icon, Step} from 'semantic-ui-react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

import '../../App.css';

const App = () => (
  <Step.Group unstackable>
    <Step active>
      <Icon name='shipping fast' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Describe your items and get a quote</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='calendar alternate outline' />
      <Step.Content>
        <Step.Title>Confirm</Step.Title>
        <Step.Description>Confirm details and recieve confirmation</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='smile outline' />
      <Step.Content>
        <Step.Title>Get Your Goods</Step.Title>
        <Step.Description>Delivery Delivery Delivery</Step.Description>
      </Step.Content>
    </Step>
    <Step active link>
      <Icon name='boxes' />
      <Step.Content>
        <Step.Title>Continue To Login</Step.Title>
        <Step.Description>Smile, We're here to help</Step.Description>
        <Link className="nav-link" to={ROUTES.HOME}></Link>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default App;
