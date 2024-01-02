import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Language">
        <DropdownMenu>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>Russian</DropdownItem>
          <DropdownItem>Spanish</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
