import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import React, { useState } from "react";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn /> : <SignedOut />}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
