import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import passwordImg from '../assets/img/Movie.png';
import socialImg from '../assets/img/Spotify.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import zomato from '../assets/img/Zomato.png';
import natoursImg from '../assets/img/ECOMMERCE.png';
import pharmacyImg from '../assets/img/Tic-Tac.png';
import notesImg from '../assets/img/T0-DO-APP.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: 'Spotify',
      description: 'Design & Development',
      imgUrl: socialImg,
      link: 'https://shubhamkannojiya-spotify.netlify.app/'
    },
    {
      title: 'Zomato',
      description: 'Design & Development',
      imgUrl: zomato,
      link: 'https://shubhamkannojiya-food-delivery.netlify.app/'
    },

    {
      title: 'E-Commerce',
      description: 'Design & Development',
      imgUrl: natoursImg,
      link: 'https://shubham70602.github.io/E-commerce/index.html'
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Design & Development',
      imgUrl: pharmacyImg,
      link: 'https://shubhamtic-tac-toe.netlify.app/'
    },
    {
      title: 'To-Do-App',
      description: 'Design & Development',
      imgUrl: notesImg,
      link: 'https://shubham1211.netlify.app'
    },
    {
      title: 'Movie Recommendation',
      description: 'Design & Development',
      imgUrl: passwordImg,
      link: 'https://vaibhav2536.github.io/Password-Generator/'
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Here are the various projects I have been developing using various tools and technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Waiting for more projects!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Always ready to collaborate.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};