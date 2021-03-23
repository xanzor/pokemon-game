import React, { Component } from "react";
import Carouselbox from "../components/Carouselbox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carouselbox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Curabitur non nulla sit amet nisl tempus convallis quis ac
                  lectus.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}
