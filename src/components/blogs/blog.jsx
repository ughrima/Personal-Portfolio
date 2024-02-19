import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blog from "../../assets/blog-1.jpg"

function WithHeaderStyledExample() {
  return (
    <div className="carousel-container">
    <br></br>
    <br></br>
    <h1>Blogs</h1>
  <br></br>
  <h3>Read some stuff I have written!</h3>
  <br></br>
    <Card>
    <img src={blog} alt="" />
      <Card.Header as="h5">Facial Biometrics Mastery: A Professional Handbook.</Card.Header>
      <Card.Body>
        {/* <Card.Title>Facial Biometrics Mastery: A Professional Handbook.</Card.Title> */}
        <Card.Text> In this comprehensive guide, I explore the intricacies of capturing, encoding, and recognizing faces using Python and its libraries. The blog provides insights into the fascinating world of facial biometrics, detailing the process of capturing facial images, encoding distinctive features into numerical representations, and the subsequent recognition of individuals. 
        </Card.Text>
        <Button variant="primary" href="https://gdscupes.hashnode.dev/facial-biometrics-mastery-a-professional-handbook">Read</Button>
      </Card.Body>
    </Card>
  
    </div>
  );
}

export default WithHeaderStyledExample;