import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LanguageSelector } from "../languageSelector/LanguageSelector";

export function Footer() {
  return (
    <Container>
      <Row>
        <Col>Questions? Contact us.</Col>
      </Row>
      <Row>
        <Col>FAQ</Col>
        <Col>Help Center</Col>
        <Col>Account</Col>
        <Col>Media Center</Col>
      </Row>
      <Row>
        <Col>Investor Relations</Col>
        <Col>Jobs</Col>
        <Col>Ways to Watch</Col>
        <Col>Terms of Use</Col>
      </Row>
      <Row>
        <Col>Privacy</Col>
        <Col>Cookie Preferences</Col>
        <Col>Corporate Information</Col>
        <Col>Contact Us</Col>
      </Row>
      <Row>
        <Col>Speed Test</Col>
        <Col>Legal Guarantee</Col>
        <Col>Legal Notices</Col>
        <Col>Only on Netflix</Col>
      </Row>
      <Row>
        <Col>Ad Choices</Col>
      </Row>
      <Row>
        <LanguageSelector />
      </Row>
      <Row>Netflix Lithuania</Row>
    </Container>
  );
}
