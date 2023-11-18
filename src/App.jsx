// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
// Media
import TV from "./components/media/tv.png";
import Phone from "./components/media/mobile.jpg";
import PhoneThumbnail from "./components/media/phoneThumbnail.png";
import PhoneAnimation from "./components/media/download-icon.gif";
import MAC from "./components/media/mac.png";
import KidsPoster from "./components/media/kids-poster.png";
import TvVideo from "./components/media/video-tv.mp4";
import MacVideo from "./components/media/video-mac.mp4";
// My components
import { Header } from "./components/header/Header";
import { ContentBox } from "./components/contentBox/ContentBox";
import { CallToAction } from "./components/call-to-action/CallToAction";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Container fluid id="hero-container">
        <div id="tint"></div>
        <Header />
        <Row className="align-items-center">
          <Row className="text-center mt-3">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p className="mt-2">Watch anywhere. Cancel anytime.</p>
          </Row>
          <CallToAction />
        </Row>
      </Container>
      <ContentBox>
        <div>
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="videoBox">
          <Image src={TV} fluid />
          <video muted autoPlay loop src={TvVideo}></video>
        </div>
      </ContentBox>
      <ContentBox order={"flip"}>
        <div>
          <h1>Download your shows to watch offline</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
        <div>
          <div id="phoneContainer">
            <Image src={Phone} fluid />
            <div>
              <img src={PhoneThumbnail} alt="stranger things poster" />
              <div>
                <p>Stranger Things</p>
                <p>Downloading...</p>
              </div>
              <img src={PhoneAnimation} alt="download animation"></img>
            </div>
          </div>
        </div>
      </ContentBox>
      <ContentBox>
        <div>
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="videoBox mac">
          <Image src={MAC} fluid />
          <video muted autoPlay loop src={MacVideo}></video>
        </div>
      </ContentBox>
      <ContentBox order={"flip"}>
        <div>
          <h1>Create profiles for kids</h1>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <Image src={KidsPoster} fluid />
      </ContentBox>
      <Container className="contentBox" fluid>
        <Container>
          <Row className="justify-content-center">
            <Col xl={11}>
              <h1 className="text-center">Frequently Asked Questions</h1>
              <Accordion className="my-4" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is Netflix</Accordion.Header>
                  <Accordion.Body>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                    <br></br> <br></br>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How much does Netflix cost?
                  </Accordion.Header>
                  <Accordion.Body>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from EUR7.99 to EUR11.99 a month. No extra costs, no
                    contracts.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Where can I watch?</Accordion.Header>
                  <Accordion.Body>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                    <br></br> <br></br> You can also download your favorite
                    shows with the iOS, Android, or Windows 10 app. Use
                    downloads to watch while you're on the go and without an
                    internet connection. Take Netflix with you anywhere.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>How do I cancel?</Accordion.Header>
                  <Accordion.Body>
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    What can I watch on Netflix?
                  </Accordion.Header>
                  <Accordion.Body>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
                  <Accordion.Body>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space. Kids profiles come with
                    PIN-protected parental controls that let you restrict the
                    maturity rating of content kids can watch and block specific
                    titles you don’t want kids to see.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Why am I seeing this language?
                  </Accordion.Header>
                  <Accordion.Body>
                    Your browser preferences determine the language shown here.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
        <Row fluid className="justify-content-center">
          <CallToAction />
        </Row>
      </Container>
      <Container className="contentBox pt-4 pb-4" fluid>
        <Row className="justify-content-center" fluid>
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
