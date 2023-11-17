import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export function LanguageSelector() {
  return (
    <DropdownButton id="dropdown-basic-button" title="English">
      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Russian</Dropdown.Item>
      <Dropdown.Item href="#/action-3">....</Dropdown.Item>
    </DropdownButton>
  );
}
