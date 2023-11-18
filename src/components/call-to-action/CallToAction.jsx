import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./CallToAction.module.css";

export function CallToAction() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={11}>
          <p className={Style.text}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </Col>
      </Row>
      <Col xl={6} lg={10} md={9} xs={11}>
        <Row className="justify-content-center">
          <Col xl={6} lg={5} md={8} xs={12}>
            <div className={Style.inputContainer}>
              <input className={Style.input} type="text" />
              <label className={Style.label}>Email address</label>
            </div>
          </Col>
          <Col lg={3} md={4} xs={6} className="px-0">
            <button className={Style.button} variant="danger">
              Get Started &gt;
            </button>
          </Col>
        </Row>
      </Col>
    </>
  );
}
