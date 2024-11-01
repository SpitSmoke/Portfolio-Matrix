import styled, { keyframes } from "styled-components";

export const glitch = keyframes`
0% {
    transform: translate(0);
    opacity: 1;
}
20% {
    transform: translate(-2px, 2px);
    opacity: 0.8;
}
40% {
    transform: translate(-2px, -2px);
    opacity: 1;
}
60% {
    transform: translate(2px, 2px);
    opacity: 0.8;
}
80% {
    transform: translate(2px, -2px);
    opacity: 1;
}
100% {
    transform: translate(0);
    opacity: 1;
}
`;

export const TerminalContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    background-color: rgba(0, 0, 0, 0.8);
    color: #00ff00;
    padding: 20px;
    border: 1px solid #00ff00;
    position: relative;
    overflow: hidden;
    animation: ${glitch} 1s infinite;


@media (max-width: 1024px) {
    max-width: 600px;
    height: 250px;
}


@media (max-width: 768px) {
    max-width: 400px;
    height: 200px;
    padding: 15px;
    font-size: 0.9rem;
}


@media (max-width: 480px) {
    max-width: 300px;
    height: 150px;
    padding: 10px;
    font-size: 0.8rem;
}
`;

export const Input = styled.input`
    background: transparent;
    border: none;
    color: #00ff00;
    width: 100%;
    outline: none; 


@media (max-width: 768px) {
    font-size: 0.9rem;
}


@media (max-width: 480px) {
    font-size: 0.8rem;
}
`;