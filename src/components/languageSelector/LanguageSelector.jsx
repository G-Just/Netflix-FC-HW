import Style from "./LanguageSelector.module.css";
import Translate from "../media/translation.svg";

export function LanguageSelector() {
  return (
    <div className={Style.selectContainer}>
      <img className={Style.icon} src={Translate} alt="select language" />
      <select className={Style.select}>
        <option value="English">English</option>
        <option value="Russian">Russian</option>
        <option value="...">...</option>
      </select>
    </div>
  );
}
