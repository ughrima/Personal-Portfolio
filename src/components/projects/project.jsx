import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import workshop from "../../assets/workshop-1.jpg"
import entropedia from "../../assets/entropedia.jpg"
import ibm from "../../assets/ibm.jpg"
import hack from "../../assets/hackathon.jpg"
import './project.css';

function App() {
  return (
    <div className="carousel-container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Glimpses</h1>
      <br></br>
      <h3>Catch me at work!</h3>
      <br></br>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={workshop}
          alt="First slide"
          style={{
            width: '100%', 
            height: '100%', 
          }} />

        <Carousel.Caption >
          <h3>GitHub Workshop</h3>
          <p>I had the opportunity to take the github workshop which had over 130+ participants.The workshop was all about version control and collaborative development, covering topics like user repository, forking, cloning, pull requests, and getting hands-on experience with Git bash.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={entropedia}
          alt="First slide"
          style={{
            width: '100%', 
            height: '100%', 
          }} />
        <Carousel.Caption >
          <h3>Youngest Entrepeneur</h3>
          <p style={{color:"white"}}>Awarded the youngest entreprenuer award in competiton held by UPES-CSA. We pitched an idea of a portal to 
            trigger memories in alzhiemer patients.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hack}
          alt="First slide"
          style={{
            width: '100%', 
            height: '10px%', 
          }} />
        <Carousel.Caption>
          <h3>Hackathon 2023</h3>
          <p>Participated in the hackathon held by UPES-CSI and had the chance to reach the top 15 teams out of the 100 participating.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={ibm}
          alt="First slide"
          style={{
            width: '100%', 
            height: '100%', 
          }} />
        <Carousel.Caption>
          <h3>IBM Poster Presentation</h3>
          <p>Won third prize in the poster presentation competion held by IBM. The poster was made on NLP.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
  );
}

export default App;
