import { MenuItem, Menu } from "semantic-ui-react";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <MenuItem name="home" />
        <MenuItem name="messages" />
        <MenuItem name="friends" />
      </Menu>
    </div>
  );
}
