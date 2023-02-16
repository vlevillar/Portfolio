import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import VIBE1 from "../assets/img/VIBE1.jpeg";
import VIBE2 from "../assets/img/VIBE2.jpeg";
import VIBE3 from "../assets/img/VIBE3.jpeg";
import DOGS1 from "../assets/img/DOGS1.jpeg";
import DOGS2 from "../assets/img/DOGS2.jpeg";
import DOGS3 from "../assets/img/DOGS3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "VIBE",
      description: "E-COMMERCE",
      imgUrl: VIBE1,
    },
    {
      title: "VIBE",
      description: "E-COMMERCE",
      imgUrl: VIBE2,
    },
    {
      title: "VIBE",
      description: "E-COMMERCE",
      imgUrl: VIBE3,
    },
  ];

  const projects2 = [
    {
      title: "DOGS",
      description: "DOGS API",
      imgUrl: DOGS1,
    },
    {
      title: "DOGS",
      description: "DOGS API",
      imgUrl: DOGS2,
    },
    {
      title: "DOGS",
      description: "DOGS API",
      imgUrl: DOGS3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here you will find a sample of my work in developing applications and websites. My projects range from static web pages to dynamic and complex web applications.

I am passionate about web programming and am always looking for ways to improve my skills and learn new technologies to create unique and engaging user experiences. I hope you enjoy my portfolio and feel free to contact me if you'd like to collaborate on a project or have any questions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">VIBE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Dogs API</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
