import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Logo from "../media/logo.svg";
import { LanguageSelector } from "../languageSelector/LanguageSelector";
import "./header.css";

export function Header() {
  return (
    <Row id="header" className="justify-content-between">
      <Col className="px-0">
        <Image id="logo" src={Logo} fluid />
      </Col>
      <Col lg={2} className="d-flex flex-nowrap">
        <LanguageSelector />
        <Button variant="danger" className="mx-2">
          Sign In
        </Button>
      </Col>
    </Row>
  );
}
