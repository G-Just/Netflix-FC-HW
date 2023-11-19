import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Footer.module.css";
import { LanguageSelector } from "../languageSelector/LanguageSelector";

export function Footer() {
  return (
    <Col xl={10} className="py-2">
      <Container>
        <Row>
          <Col>
            <p
              className={Style.textSpecial}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Questions? Contact us.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>FAQ</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Help Center</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Account</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Media Center</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Investor Relations</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Jobs</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Ways to Watch</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Terms of Use</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Privacy</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Cookie Preferences</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Corporate Information</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Contact Us</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Speed Test</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Legal Guarantee</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Legal Notices</p>
          </Col>
          <Col xs={6} md={6} lg={3}>
            <p className={Style.text}>Only on Netflix</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={Style.text}>Ad Choices</p>
          </Col>
        </Row>
        <Row>
          <Col xs={5} sm={3} lg={2} className="my-4">
            <LanguageSelector />
          </Col>
        </Row>
        <Row>
          <p className={Style.textSpecial}>Netflix Lithuania</p>
        </Row>
      </Container>
    </Col>
  );
}
