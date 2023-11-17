import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function CallToAction() {
  return (
    <Row className="justify-content-center">
      <Col lg={6}>
        <p className="text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <Stack direction="horizontal" gap={2} className="px-5">
          <Form.Control placeholder="Email address" />
          <Button variant="danger">Get Started &gt;</Button>
        </Stack>
      </Col>
    </Row>
  );
}
