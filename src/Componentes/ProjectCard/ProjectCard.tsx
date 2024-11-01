import React from "react";
import { Card, Description, LinkButton, Title } from "./Styles";

const ProjectCard = ({ title,
    description,
    link 
}: {
    title: string;
    description: string;
    link: string}) => {
    return (
        <Card>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <LinkButton href={link} target="_blank" rel="noopener noreferrer" >
            Project
            </LinkButton>
        </Card>
    )
};

export default ProjectCard