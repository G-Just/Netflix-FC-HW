import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function CallToAction() {
  return (
    <>
      Ready to watch? Enter your email to create or restart your membership.
      <Stack direction="horizontal" gap={2}>
        <Form.Control className="me-auto" placeholder="Email address" />
        <Button variant="danger">Get Started &gt;</Button>
      </Stack>
    </>
  );
}
