import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Style from "./ContentBox.module.css";

export function ContentBox(props) {
  return (
    <Container className="contentBox" fluid>
      <Container>
        <Row className="justify-content-center">
          <Col xxl={11} lg={12} md={12}>
            <Row className="align-items-center">
              <Col lg={6} md={12}>
                {props.children[0]}
              </Col>
              <Col lg={6} md={12}>
                {props.children[1]}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
