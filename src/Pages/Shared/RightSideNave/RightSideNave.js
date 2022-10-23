import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaWhatsapp  } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../images/image1.png';
import img2 from '../../../images/img2.jpg';
import images3 from '../../../images/images3.jpg';



const RightSideNave = () => {
    return (
        <div>
          
    <ButtonGroup vertical>
     
      

      <Button variant="outline-primary mb-3" ><FaGoogle></FaGoogle> Sign In with Google</Button>
      <Button variant="outline-dark"><FaGithub></FaGithub> Sign in with GitHub</Button>
      
      
    </ButtonGroup>
    <div className='mt-3'>
        <h4>find us on!!</h4>
        <ListGroup>
      <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter>Twitter </ListGroup.Item>
      <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> Whatsapp
      </ListGroup.Item>
      
    </ListGroup>
    </div>

       <div>
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>24 NEWS!!!!!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>live!!!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Save the Nature</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>

        </div>
    );
};

export default RightSideNave;