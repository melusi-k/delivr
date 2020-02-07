import React from "react";
import { Block, Inline } from "jsxstyle";

import { DARK_GRAY, BRIGHT_GRAY, LIGHT_GRAY } from "../../../Theme.js";

function FooterLink({ href, ...rest }) {
  return (
    <Inline
      component="a"
      props={{ href }}
      {...rest}
      textDecoration="underline"
    />
  );
}

function AddColour() {
  return (
    <FooterLink href="https://www.addcolour.co">Add Colour</FooterLink>
  );
}

function Contributors() {
  return (
    <FooterLink href="https://github.com/addcolour/react-router/graphs/contributors">
      contributors
    </FooterLink>
  );
}

function CC() {
  return (
    <FooterLink href="https://creativecommons.org/licenses/by/4.0/">
      CC 4.0
    </FooterLink>
  );
}

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <Block>
      <Block
        background={DARK_GRAY}
        color={BRIGHT_GRAY}
        padding="40px"
        textAlign="center"
        fontSize="80%"
      >
        <Block component="p">
          This app is built and maintained by <AddColour /> and hundreds
          of <Contributors />.
        </Block>
        <Block marginTop="20px" color={LIGHT_GRAY}>
          &copy; {year} Add Colour
        </Block>
        <Block color={LIGHT_GRAY}>
          Code examples and documentation <CC />
        </Block>
      </Block>
    </Block>
  );
}
