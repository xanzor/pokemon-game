import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from '../assets/gor.jpeg';
import imgTwo from "../assets/ocean.jpeg";

export default class Carouselbox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={imgOne} height="500" alt="img" />
          <Carousel.Caption>
            <h3>Mountains image</h3>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Proin eget tortor risus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imgTwo} height="500" alt="img" />
          <Carousel.Caption>
            <h3>Ocean image</h3>
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Proin eget tortor risus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
    
  }
}
