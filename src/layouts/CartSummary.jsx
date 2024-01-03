import { DropdownMenu, DropdownItem, Dropdown } from "semantic-ui-react";

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
