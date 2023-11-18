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
          <Col lg={3} md={2} xs={4} className="px-0">
            <Image className={Style.logo} src={Logo} fluid />
          </Col>
          <Col
            xxl={3}
            lg={5}
            md={10}
            xs={8}
            className="d-flex flex-nowrap justify-content-end gap-3"
          >
            <Col lg={7} md={3} xs={3}>
              <LanguageSelector />
            </Col>
            <Col lg={4} md={2} xs={5}>
              <button className={Style.button}>Sign In</button>
            </Col>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
