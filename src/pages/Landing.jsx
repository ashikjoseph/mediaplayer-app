import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, labore, voluptatibus nesciunt ab rerum ducimus dolores optio magnam dolore dolor voluptatum tenetur laudantium inventore quaerat laboriosam hic modi expedita error?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas non accusamus ex, autem repellendus est, aspernatur dolores quam recusandae unde at explicabo. Vel voluptatum qui et neque expedita atque fugiat.
            </p>
            <Link to='home'>
              <button className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
            </Link>

          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" height={'400px'} className='ms-5' />
          </Col>
        </Row>
      </Container>
      <div className='container  mb-5'>
        <h3>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col>
            <h3 className='text-warning mt-5 mb-5'>Simple and Powerful</h3>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet magni assumenda dolorum ullam harum dolor odio ipsum. Expedita qui eaque vitae nemo nam veritatis quam quidem voluptatibus non quasi!</p>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam dolorem explicabo, soluta unde facere minus, dolor vero repellat vitae debitis id, veniam ipsa at consequuntur? Soluta odio dolorum consequatur non..</p>
            <p><span className='fs-5 fw-bolder'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam consectetur qui dolore illum veniam quibusdam commodi quas. Deserunt sapiente, a temporibus omnis voluptates nulla nostrum fuga non aspernatur dolore eos.</p>
          </Col>
          <Col>
            <div className='mt-5'>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/nYEoxne_20Y" title="Neela Nilave - Video Song | RDX | Kapil Kapilan | Sam CS | Shane Nigam,Antony Varghese,Neeraj Madhav" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing