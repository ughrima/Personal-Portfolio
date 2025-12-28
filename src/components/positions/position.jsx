import Accordion from 'react-bootstrap/Accordion';
import gdsc from "../../assets/gdsc-light.webp"
import open from "../../assets/open-logo.png"
import csi from "../../assets/csi-logo.png"
import mtc from "../../assets/mtc-logo.png"
import './position.css';

function BasicExample() {
  return (
    <section id="positions">
      <h5>Extra Curricular</h5>
      <h2>Positions Held in Societies in College</h2>
      <div className="container positions-container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="position-header-content">
                <img src={open} alt="OPEN Community" className="position-logo" />
                <h5>OPEN Community, UPES</h5>
              </div>
            </Accordion.Header>
            <Accordion.Body> 
              <div className="position-detail">
                <h4>Website Lead</h4>
                <p>I supervised a team of three individuals, overseeing the management and regular updates of our website to keep it current with upcoming events and activities.</p>
                <small>2023 - 2024</small>
              </div>
              <div className="position-detail">
                <h4>Student Developer</h4>
                <p>I was taken as the student developer after a month of participation in OPEN Learning program. I contributed in various projects.</p>
                <small>2023 - 2024</small>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="position-header-content">
                <img src={gdsc} alt="GDSC UPES" className="position-logo" />
                <h5>Google Developer Society, UPES</h5>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="position-detail">
                <h4>Core Member</h4>
                <p>I designed event posters, led workshops on github and python, and wrote blogs.</p>
                <small>2023 - 2024</small>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="position-header-content">
                <img src={csi} alt="CSI UPES" className="position-logo" />
                <h5>Computer Society India, UPES</h5>
              </div>
            </Accordion.Header>
            <Accordion.Body> 
              <div className="position-detail">
                <h4>Design Core Member</h4>
                <p>I designed posters for various events and also indulged in video editing.</p>
                <small>2023 - 2024</small>
              </div>
              <div className="position-detail">
                <h4>Technical Core Member</h4>
                <p>I was involved in the making of the community official website for that tenure.</p>
                <small>2022 - 2023</small>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <div className="position-header-content">
                <img src={mtc} alt="MTC UPES" className="position-logo" />
                <h5>Microsoft Technical Community, UPES</h5>
              </div>
            </Accordion.Header>
            <Accordion.Body> 
              <div className="position-detail">
                <h4>Technical Core Member</h4>
                <p>I was involved in the making of the community official website for that tenure.</p>
                <small>2022 - 2023</small>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default BasicExample;