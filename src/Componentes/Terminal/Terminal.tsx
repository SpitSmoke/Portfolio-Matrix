import React, { useEffect, useRef, useState } from 'react';

import {
  Input,
  SuggestionItem,
  TerminalA,
  TerminalContainer,
  TerminalLi,
  TerminalUl,
  SuggestionsContainer
} from './Styles'
import CodeRain from './CodeRainContainer'
import TypingText from '../TypingText/TypingText'

const randomQuotes = [
  'Persistence is the key to success - Charles Chaplin',
  'The only way to do great work is to love what you do - Steve Jobs',
  'The best way to predict the future is to create it - Peter Drucker',
  'Don’t count the days, make the days count- Muhammad Ali'
]

const randomJokes = [
  'Why did the programmer prefer the dark? Because he didn’t want to see the bugs!',
  'How does a programmer count to ten? 1, 10!',
  'Why is JavaScript a great love language? Because it always adapts to your context!'
]
const commandsList = [
  'whoami',
  'projects',
  'skills',
  'contact',
  'help',
  'quote',
  'joke',
  'time',
  'matrix',
  'clear'
]

const Terminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null)
  const [command, setCommand] = useState<string>('')
  const [output, setOutput] = useState<JSX.Element[]>([])
  const [codeRainActive, setCodeRainActive] = useState<boolean>(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      let response: JSX.Element | string = ''

      setCommandHistory((prevHistory) => [...prevHistory, command])
      setHistoryIndex(null)

      switch (command.trim().toLowerCase()) {
        case 'whoami':
          response = (
            <span className="response response-success">
              Nice to meet you! My name is José Miguel Silva Felício, a
              23-year-old full-stack web developer from Curitiba. I work
              primarily with TypeScript, React on the front end, and Node.js on
              the back end. I recently completed a freelance project for a
              gutter company and enjoy keeping my skills sharp by creating
              unique projects, like my current Matrix-inspired portfolio. I’m
              passionate about coding and experimenting with new effects,
              especially ones with a hacker vibe! I’m currently building a
              portfolio with features like a terminal interface, command
              history, interactive navigation, syntax highlighting, and
              simulated API commands to create an immersive experience. As for
              design, I’m all about that dark, cyber aesthetic.
            </span>
          )
          break
        case 'projects':
          response = (
            <div className="response response-link">
              Projects:
              <TerminalUl>
                <TerminalLi>
                  <TerminalA
                    href="https://github.com/SpitSmoke/Efood"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Efood
                  </TerminalA>
                  - A food delivery app
                </TerminalLi>
                <TerminalLi>
                  <TerminalA
                    href="https://github.com/SpitSmoke/Trivia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trivia
                  </TerminalA>
                  - Quiz app with custom questions
                </TerminalLi>
                <TerminalLi>
                  <TerminalA
                    href="https://github.com/SpitSmoke/Python-IA-Reconhecimento"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IA recognize users
                  </TerminalA>
                  - Uses AI for facial recognition
                </TerminalLi>
              </TerminalUl>
            </div>
          )
          break
        case 'skills':
          response = (
            <span className="response">
              Skills: <br />- TypeScript
              <br />- React
              <br />- Node.js
              <br />- CSS
              <br />- HTML
            </span>
          )
          break
        case 'contact':
          response = (
            <span className="response">
              Contact: <br />
              Email: jmfelicio.sp@gmail.com
              <br />
              LinkedIn: linkedin.com/in/jose-miguel-silva-felicio
              <br />
              GitHub: github.com/SpitSmoke
            </span>
          )
          break
        case 'help':
          response = (
            <span className="response">
              List of commands: <br />
              - whoami: Present information about me
              <br />- projects: List my projects
              <br />- skills: Show my skills
              <br />- contact: Display contact information
              <br />- help: Show this list of commands
              <br />- quote: Show the quotes
              <br />- joke: Make a joke
              <br />- time: Show the time
              <br />- matrix: Matrix Effect
              <br />- clear: Clear the console or (CTRL + L)
            </span>
          )
          break
        case 'quote':
          {
            const randomQuote =
              randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
            response = <span className="response">{randomQuote}</span>
          }
          break
        case 'joke': {
          const randomJoke =
            randomJokes[Math.floor(Math.random() * randomJokes.length)]
          response = <span className="response">{randomJoke}</span>
          break
        }
        case 'time':
          response = (
            <span className="response">{new Date().toLocaleTimeString()}</span>
          )
          break
        case 'clear':
          setOutput([])
          setCommand('')
          return
        case 'matrix':
          response = (
            <span className="response">Activating Matrix Effect...</span>
          )
          setCodeRainActive(true)
          break
        default:
          response = (
            <span className="response-error">
              Unrecognized command: {command}
            </span>
          )
      }

      setOutput((prev: JSX.Element[]) => [...prev, response])
      setCommand('')
    }

    if (event.ctrlKey && event.key === 'l') {
      event.preventDefault()
      setOutput([])
      setCommand('')
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (historyIndex === null && commandHistory.length > 0) {
        setHistoryIndex(commandHistory.length - 1)
        setCommand(commandHistory[commandHistory.length - 1])
      } else if (historyIndex! > 0) {
        setHistoryIndex(historyIndex! - 1)
        setCommand(commandHistory[historyIndex! - 1])
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (historyIndex !== null) {
        if (historyIndex < commandHistory.length - 1) {
          setHistoryIndex(historyIndex + 1)
          setCommand(commandHistory[historyIndex + 1])
        } else {
          setHistoryIndex(null)
          setCommand('')
        }
      }
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCommand(value)

    if (value) {
      const filteredSuggestions = commandsList.filter((cmd) =>
        cmd.startsWith(value.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [output])

  return (
    <TerminalContainer ref={terminalRef}>
      <TypingText
        text="Welcome to my hacker-style portfolio! Type 'help' to see the available commands."
        speed={14}
      />
      <CodeRain active={codeRainActive} />
      {output.map((line: JSX.Element, index: number) => (
        <div key={index}>{line}</div>
      ))}
      <Input
        type="text"
        value={command}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Type a command..."
      />

      {suggestions.length > 0 && (
        <SuggestionsContainer>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              onClick={() => {
                setCommand(suggestion)
                setSuggestions([])
              }}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsContainer>
      )}
    </TerminalContainer>
  )
}

export default Terminal