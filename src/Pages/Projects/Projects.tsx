import styled from "styled-components";
import ProjectCard from "../../Componentes/ProjectCard/ProjectCard";

const Title = styled.h2`
  font-family: "Roboto Mono", monospace;
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const projects = [
  {
    title: "Efood",
    description:
      "This project is an interactive delivery system called efood, where users can explore restaurants, view menus, and place orders online",
    link: "https://github.com/SpitSmoke/Efood",
  },
  {
    title: "Trivia",
    description:
      "A question-and-answer game created with a Java back end and a front end using React and TypeScript",
    link: "https://github.com/SpitSmoke/Trivia",
  },
  {
    title: "Python IA",
    description:
      "An AI developed in Python for recognizing registrations.crição do projeto 3",
    link: "https://github.com/SpitSmoke/Python-IA-Reconhecimento",
  },
];

const Projects = () => {
  return (
    <div>
      <Title>.</Title>
      <ProjectsContainer>
        {projects.map((projects, index) => (
          <ProjectCard
            key={index}
            title={projects.title}
            description={projects.description}
            link={projects.link}
          />
        ))}
      </ProjectsContainer>
    </div>
  )
};

export default Projects;
