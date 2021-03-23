import React, { Component } from "react";
import { Container, Tab, Nav, Col, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Librares</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-2">
                <Tab.Pane eventKey="first">
                  <img
                    src="https://figma.imgix.net/2BZ3wPNLZm0OuS06m00gWA/36ef771dc57b422e3ce7b427db74b863/BQpFChaY.jpg?&w=1060&auto=compress%2Cformat&crop=entropy&fit=crop&q=75"
                    alt="img"
                    width="800"
                    height="400"
                  />
                  <p>
                    Proin eget tortor risus. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Curabitur non nulla
                    sit amet nisl tempus convallis quis ac lectus. Curabitur
                    aliquet quam id dui posuere blandit. Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula
                    sed magna dictum porta. Mauris blandit aliquet elit, eget
                    tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus. Vestibulum ante ipsum
                    primis in faucibus orci luctus et feugiat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://cdn.vox-cdn.com/thumbor/Ndb49Uk3hjiquS041NDD0tPDPAs=/0x169:1423x914/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/7342855/microsoftteams.0.jpg"
                    alt="img"
                    width="800"
                    height="400"
                  />
                  <p>
                    Proin eget tortor risus. Vivamus magna justo, lacinia egett
                    nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Curabitur non nulla sit
                    amet nisl tempus convallis quis ac lectus. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; Donec velit neque, auctor sit amet aliquam
                    vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
                    magna dictum porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla quis lorem ut libero malesuada
                    feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec rutrum congue leo eget malesuada. Nulla quis
                    lorem ut libero malesuada feugiat. Pellentesque in ipsum id
                    orci porta dapibus. Nulla quis lorem ut libero malesuada
                    feugiat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="img"
                    width="800"
                    height="400"
                  />
                  <p>
                    Proin eget tortor risus. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Curabitur non nulla
                    sit amet nisl tempus convallis quis ac lectus. Curabitur
                    aliquet quam id dui posuere blandit. Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula
                    sed magna dictum porta. Mauris blandit aliquet elit, eget
                    tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula. Cras ultricies ligula sed magna
                    dictum porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla quis lorem ut libero malesuada
                    feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec rutrum congue leo eget malesuada. Nulla quis
                    lorem ut libero malesuada feugiat. Pellentesque in ipsum id
                    orci porta dapibus. Nulla quis lorem ut libero malesuada
                    feugiat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://miro.medium.com/max/3840/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg"
                    alt="img"
                    width="800"
                    height="400"
                  />
                  <p>
                    Proin eget tortor risus. Vivamus magna justo, lacinia eget
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla quis lorem ut libero malesuada
                    feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec rutrum congue leo eget malesuada. Nulla quis
                    lorem ut libero malesuada feugiat. Pellentesque in ipsum id
                    orci porta dapibus. Nulla quis lorem ut libero malesuada
                    feugiat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://wpdatatables.com/wp-content/uploads/2018/06/javascript.jpg"
                    alt="img"
                    width="800"
                    height="400"
                  />
                  <p>
                    Proin eget tortor risus. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis at tellus. Curabitur non nulla
                    sit amet nisl tempus convallis quis ac lectus. Curabitur
                    aliquet quam id dui posuere blandit. Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula
                    sed magna dictum porta. Mauris blandit aliquet elit, eget
                    tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl
                    tempus convallis quis ac lectus. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur non nulla sit amet
                    nisl tempus convallis quis ac lectus. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Donec velit neque, auctor sit amet aliquam vel,
                    ullamcorper sit amet ligula. Cras ultricies ligula sed magna
                    dictum porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla quis lorem ut libero malesuada
                    feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec rutrum congue leo eget malesuada. Nulla quis
                    lorem ut libero malesuada feugiat. Pellentesque in ipsum id
                    orci porta dapibus. Nulla quis lorem ut libero malesuada
                    feugiat.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
