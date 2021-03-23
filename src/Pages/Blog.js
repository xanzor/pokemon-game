import React, { Component } from 'react';
import { Container, Row, Col, Media, Card, ListGroup } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <img
                width={180}
                height={120}
                className="mr-3"
                alt="img"
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Praesent sapien massa, convallis a
                  pellentesque nec, egestas.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={180}
                height={120}
                className="mr-3"
                alt="img"
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Praesent sapien massa, convallis a
                  pellentesque nec, egestas.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={180}
                height={120}
                className="mr-3"
                alt="img"
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Praesent sapien massa, convallis a
                  pellentesque nec, egestas.
                </p>
              </Media.Body>
            </Media>
            <Media className="m-5">
              <img
                width={180}
                height={120}
                className="mr-3"
                alt="img"
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Media.Body>
                <h5>Blog post</h5>
                <p>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus. Curabitur arcu erat, accumsan id imperdiet et,
                  porttitor at sem. Praesent sapien massa, convallis a
                  pellentesque nec, egestas.
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col md="3">
            <h5 className="mt-5 text-center">Catigories</h5>
            <Card className="mt-3">
              <ListGroup variant="flush">
                <ListGroup.Item>Html/css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>C/C++</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
