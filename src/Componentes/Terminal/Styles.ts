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

  .response-success {
    color: #00ff00;
  }

  .response-error {
    color: #ff0000;
  }

  .response-link {
    color: #00ffff;
    text-decoration: underline;
    cursor: pointer;
  }

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
`

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
`

export const CodeRainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  .code {
    position: absolute;
    top: -10%;
    color: #00ff00;
    white-space: nowrap;
    font-family: 'Roboto Mono', monospace;
    font-size: 1.2rem;
    animation: fall linear infinite;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`
export const TerminalUl = styled.ul`
  list-style: none;
  padding: 0;
`

export const TerminalLi = styled.li`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.2rem;
  color: #00ffff;
  list-style: none;
  border: 1px solid #00ff00;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 255, 0, 0.5);
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 255, 0, 0.3);
    font-weight: bold;
    cursor: pointer;
  }
  &::before {
    color: #00ff00;
    margin-right: 10px;
  }
`

export const TerminalA = styled.a`
  color: #9400d3;
  background-color: transparent;
  text-decoration: none;

  &:hover::before {
    content: '► ';
    color: #00ff00;
  }
`
export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  border: 1px solid #00ff00;
  max-height: 100px;
  overflow-y: auto;
  z-index: 1;
`

export const SuggestionItem = styled.div`
  padding: 8px;
  color: #00ff00;
  cursor: pointer;

  &:hover {
    background-color: #00ff00;
    color: #000;
  }
`