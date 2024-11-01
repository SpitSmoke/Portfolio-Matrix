import styled from "styled-components";

export const Card = styled.div`
background: rgba(0, 0, 0, 0.8);
border: 1px solid #00ff00;
border-radius: 10px;
padding: 20px;
margin: 10px;
width: 300px;
text-align: center;
transition: transform 0.3s;

&:hover{
    transform: scale(1.05);
}
`; 

export const Title = styled.h3`
    font-family: ' Roboto Mono', monospace;
    color: #00ff00;
`;

export const Description = styled.p`
    color: #ffffff;
`;
export const LinkButton = styled.a`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #00ff00;
    color: #000;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #00cc00;
    }
`;