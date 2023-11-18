import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ContentBox(props) {
  let stl = { order: "first" };
  if (props.order) {
    stl = { order: "last" };
  }
  return (
    <Container className="contentBox" fluid>
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={12} xxl={11}>
            <Row className="align-items-center">
              <Col className="col-lg-6" md={12} lg={stl}>
                {props.children[0]}
              </Col>
              <Col md={12} lg={6}>
                {props.children[1]}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
