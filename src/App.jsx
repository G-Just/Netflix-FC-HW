import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import { CallToAction } from "./components/call-to-action/CallToAction";
import { Footer } from "./components/footer/Footer";
import TV from "./components/media/tv.png";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Container fluid id="header-container">
        <div id="tint"></div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Header />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Row className="text-center">
            <h1 style={{ fontWeight: "900" }}>
              Unlimited movies, TV shows, and more
            </h1>
            <p>Watch anywhere. Cancel anytime.</p>
          </Row>
          <CallToAction />
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <h2>Enjoy on your TV</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </Col>
          <Col>
            <Image src={TV} fluid />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>Video</Col>
          <Col>Text</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>Text</Col>
          <Col>Video</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>Image</Col>
          <Col>Text</Col>
        </Row>
      </Container>
      <Container>
        <h1 className="text-center">Frequently Asked Questions</h1>
        <Accordion defaultActiveKey="0" data-bs-theme="dark" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Netflix</Accordion.Header>
            <Accordion.Body>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How much does Netflix cost?</Accordion.Header>
            <Accordion.Body>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              EUR7.99 to EUR11.99 a month. No extra costs, no contracts.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where can I watch?</Accordion.Header>
            <Accordion.Body>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I cancel?</Accordion.Header>
            <Accordion.Body>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
            <Accordion.Body>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
            <Accordion.Body>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Why am I seeing this language?</Accordion.Header>
            <Accordion.Body>
              Your browser preferences determine the language shown here.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <CallToAction />
      </Container>
      <Footer />
    </>
  );
}

export default App;
