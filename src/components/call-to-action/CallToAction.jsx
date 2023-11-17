import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./CallToAction.module.css";

export function CallToAction() {
  return (
    <Row className="justify-content-center">
      <Col lg={6}>
        <p className={Style.text}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div>
          <div className={Style.stack}>
            <div className={Style.inputContainer}>
              <input className={Style.input} type="text" />
              <label className={Style.label}>Email address</label>
            </div>
            <button className={Style.button} variant="danger">
              Get Started &gt;
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
