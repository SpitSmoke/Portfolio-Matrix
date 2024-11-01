import React from "react";
import styled from "styled-components";

const Title = styled.h2`
font-family: 'Roboto Mono', monospace;
`;

const About = () => {
    return(
        <div>
            <Title>About me:</Title>
            <p>I'm José Miguel Silva Felício, a full-stack web developer</p>
            <p>I am a developer specialized in TypeScript, React, and Node.js.</p>

        </div>
    )
}

export default About