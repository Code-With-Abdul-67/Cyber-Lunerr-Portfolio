import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png"
import projImg5 from "../assets/img/project-img5.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PhonSint",
      description: "A Python Based Phone Number OSINT Tool to gather info about Phone Numbers",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Code-With-Abdul-67/PhonSint",  
    },
    {
      title: "Secure-Pass",
      description: "A Python Based CLI Password Manager, used to save all of your passwords locally",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Code-With-Abdul-67/Secure-Pass",
    },
    {
      title: "Health-Heavn",
      description: "A Health and Fitness app that helps users track their health data.",
      imgUrl: projImg3,
      githubUrl: "https://health-heaven-77.vercel.app/",
    },
    {
      title: "Skin Essence",
      description: "A Beauty and Skin Care Website which helps you out to plan your Skin and Beauty Care routine",
      imgUrl: projImg4,
      githubUrl: "https://skin-essence-beauty-care.vercel.app/"
    },
    {
      title: "Net Switch",
      description: "A powerful CLI tool designed to help you easily toggle between monitor mode and managed mode for your wireless network interfaces",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Code-With-Abdul-67/Net-Switch"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>Currently I have worked on three projects, all of them are available on my GitHub, so you can check them out, and I'll share more projects here very soon...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background design pattern"></img>
    </section>
  );
};
