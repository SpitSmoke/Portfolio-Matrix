import styled, { keyframes } from "styled-components";

export const typing = keyframes`
from {width: 0;}
to {width: 100;}
`;

export const NeonText = styled.h1`
    color: #00ff00;
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px;
    width: 100%;
    animation: 
`;

export const Subtitle = styled.p`
    color: #00ff00;
    opacity: 0.8;
    font-size: 1.2rem;
`;
