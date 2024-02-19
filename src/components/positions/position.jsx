import Accordion from 'react-bootstrap/Accordion';
import gdsc from "../../assets/gdsc-light.webp"
import open from "../../assets/open-logo.png"
import csi from "../../assets/csi-logo.png"
import mtc from "../../assets/mtc-logo.png"

function BasicExample() {
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
    <h1>Positions</h1>
  <br></br>
  <h3>More about the positions I have worked in!</h3>
  <br></br>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header style={{backgroundColor:"#ccffe6"}}>
          <img src={open} alt=""
          style={{
            width: '50px', 
            height: 'auto', 
            borderRadius: '50%',  
            boxShadow: '4px 4px 8px rgba(0.1, 0, 0, 0.1)',  
            marginRight:'10px',
          }} />
          <h5>  OPEN Community, UPES </h5> </Accordion.Header>
        <Accordion.Body> 
        <b>Website Lead</b> <br></br>  
        I supervised a team of three individuals, overseeing the management and regular updates of our website to keep it current with upcoming events and activities.
        <br></br> 2023 - 2024
        <br></br>
        <br></br>
        <b>Student Devloper</b> <br></br>  
        I was taken as the student devloper after a month of participation in OPEN Learning program. I contributed in various projects.
        <br></br> 2023 - 2024
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="1">
        <Accordion.Header style={{backgroundColor:"#ccffe6"}}>
          <img src={gdsc} alt=""
          style={{
            width: '50px', 
            height: 'auto', 
            borderRadius: '50%',  
            boxShadow: '4px 4px 8px rgba(0.1, 0, 0, 0.1)',  
            marginRight:'10px',
          }} />
          <h5>Google Developer Society, UPES </h5> </Accordion.Header>
        <Accordion.Body>
        <b>Core Member</b> <br></br>    
          I designed event posters, led workshops on github and python, and wrote blogs. 
        <br></br> 2023 - 2024
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="2">
        <Accordion.Header style={{backgroundColor:"#ccffe6"}}>
          <img src={csi} alt=""
          style={{
            width: '50px', 
            height: 'auto', 
            borderRadius: '50%',  
            boxShadow: '4px 4px 8px rgba(0.1, 0, 0, 0.1)',  
            marginRight:'10px',
          }} />
          <h5> Computer Society India, UPES </h5> </Accordion.Header>
        <Accordion.Body> 
          <b>Design Core Member</b> <br></br>  
          I designed posters for various events and also indulged in video editing. 
        <br></br> 2023 - 2024
        <br></br> 
        <br></br> 
        <b>Technical Core Member</b>   <br></br>  
          I was involved in the making of the community official website for that tenure. 
        <br></br> 2022 - 2023
        </Accordion.Body>
      </Accordion.Item>
      <br></br>
      <Accordion.Item eventKey="3">
        <Accordion.Header style={{backgroundColor:"#ccffe6"}}>
          <img src={mtc} alt=""
          style={{
            width: '50px', 
            height: 'auto', 
            borderRadius: '50%',  
            boxShadow: '4px 4px 8px rgba(0.1, 0, 0, 0.1)',  
            marginRight:'10px',
          }} />
          <h5> Microsoft Technical Community, UPES </h5> </Accordion.Header>
        <Accordion.Body> 
        <b>Technical Core Member</b>   <br></br>  
          I was involved in the making of the community official website for that tenure. 
        <br></br> 2022 - 2023
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default BasicExample;