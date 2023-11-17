import Logo from "../images/logo.svg";
import Translate from "../images/translation.png";
import "./header.css";

export function Header() {
  return (
    <div id="header">
      <img src={Logo} alt="netflix logo" />
      <div id="right">
        <div id="select-container">
          <img src={Translate} alt="" />
          <select id="header-right-select">
            <option value="English" selected>
              English
            </option>
            <option value="Russian">Russian</option>
          </select>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
}
