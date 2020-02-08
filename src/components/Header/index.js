import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <Link to={ROUTES.HOME} className="header__claim">
          <span className="header__title">delivr.</span>
        </Link>
      </header>
    );
  }
}

export default Header;
