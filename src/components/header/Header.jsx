import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Logo from "../media/logo.svg";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import Style from "./Header.module.css";

export function Header() {
  return (
    <Row className="justify-content-center">
      <Col xxl={8} lg={12}>
        <Row className={Style.header}>
          <Col xs={4} md={2} lg={4} className="px-0">
            <Image className={Style.logo} src={Logo} fluid />
          </Col>
          <Col
            xs={8}
            md={10}
            lg={5}
            xxl={3}
            className="d-flex flex-nowrap justify-content-end gap-3"
          >
            <Col xs={3} md={3} lg={8}>
              <LanguageSelector />
            </Col>
            <Col xs={5} md={2} lg={4}>
              <button className={Style.button}>Sign In</button>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
