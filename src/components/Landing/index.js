import React from "react";
import { Icon, Step } from "semantic-ui-react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { Flex, Small } from "rebass";
import "../../App.css";

const App = () => (
  <Step.Group unstackable>
    <Step active link>
      <Icon name="boxes" />
      <Step.Content>
        <Step.Title>Continue To Login</Step.Title>
        <Step.Description>Smile, We're here to help</Step.Description>
        <Link className="nav-link" to={ROUTES.HOME} />
      </Step.Content>
    </Step>
  </Step.Group>
);

export default App;
