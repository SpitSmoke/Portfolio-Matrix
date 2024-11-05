import React, { useEffect, useRef, useState } from 'react'

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
  'ping',
  'cv',
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

  const simulatePing = (address: string) => {
    const pingMessages = [
      `PING ${address} (192.168.0.1): 56 data bytes`,
      `64 bytes from 192.168.0.1: icmp_seq=0 ttl=64 time=14.2 ms`,
      `64 bytes from 192.168.0.1: icmp_seq=1 ttl=64 time=13.8 ms`,
      `64 bytes from 192.168.0.1: icmp_seq=2 ttl=64 time=14.0 ms`,
      `64 bytes from 192.168.0.1: icmp_seq=3 ttl=64 time=13.7 ms`,
      `--- ${address} ping statistics ---`,
      `4 packets transmitted, 4 packets received, 0.0% packet loss`,
      `round-trip min/avg/max = 13.7/13.9/14.2 ms`
    ]

    pingMessages.forEach((message, index) => {
      setTimeout(() => {
        setOutput((prev) => [
          ...prev,
          <span className="response">{message}</span>
        ])
      }, index * 500)
    })
  }

  const missionsList = [
    {
      title: 'Explore the Terminal',
      description: 'Execute the command "whoami" to learn about yourself.',
      completed: false
    },
    {
      title: 'Show Your Projects',
      description: 'Run the command "projects" to display your projects.',
      completed: false
    },
    {
      title: 'Reveal Your Skills',
      description: 'Use the command "skills" to show your skills.',
      completed: false
    }
  ]
  const [missions, setMissions] = useState(missionsList)

  const simulateConnection = (response: JSX.Element | string) => {
    const randomCharacters =
      'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*() ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ ノ ハ ヒ フ ヘ ホ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ヲ ワ ン'
    const connectionDuration = 8500
    const interval = 100

    const startTime = Date.now()

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime

      if (elapsedTime > connectionDuration) {
        clearInterval(intervalId)
        setOutput((prev) => [...prev, <span>{response}</span>])
      } else {
        const randomChar =
          randomCharacters[Math.floor(Math.random() * randomCharacters.length)]
        setOutput((prev) => [...prev, <span>{randomChar}</span>])
      }
    }, interval)
  }

  const handleMissionsCommand = () => {
    const missionResponses = missions.map((mission, index) => {
      return (
        <span key={index} className="response">
          {mission.completed
            ? `✅ ${mission.title} - Completed`
            : `❌ ${mission.title} - ${mission.description}`}{' '}
        </span>
      )
    })

    setOutput((prev) => [...prev, ...missionResponses])
  }

  const handleCompleteMissionCommand = (index: number) => {
    setMissions((prevMissions) => {
      const newMissions = [...prevMissions]
      newMissions[index].completed = true
      setOutput((prev) => [
        ...prev,
        <span className="response">
          Mission "{newMissions[index].title}" completed!
        </span>
      ])

      return newMissions
    })
  }

  const handleCvCommand = () => {
    const cvData = [
      'Name: José Miguel Silva Felício',
      'Age: 23 years',
      'Country: Brazil',
      'Skills: TypeScript, React, Node.js, CSS, JavaScript, Java, SpringBoot',
      'For more details, check my CV: '
    ]

    const displayCvInfo = (index: number) => {
      if (index < cvData.length) {
        const response =
          index === cvData.length - 1 ? (
            <span className="response-sucess">
              {cvData[index]}
              <TerminalA
                href="https://drive.google.com/file/d/1JoPs460SdlL0Iv7Ro-NAVkvkiOk_K9aR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                MY CV
              </TerminalA>
            </span>
          ) : (
            <span className="response">{cvData[index]}</span>
          )

        setOutput((prev) => [...prev, response])
        setTimeout(() => displayCvInfo(index + 1), 1000)
      }
    }

    displayCvInfo(0)
  }

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
                  - Uses AI recognition ID
                </TerminalLi>
                <TerminalLi>
                  <TerminalA
                    href="https://github.com/SpitSmoke/Chat-com-python"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat
                  </TerminalA>
                  - Chat build with Python
                </TerminalLi>
                <TerminalLi>
                  <TerminalA
                    href="https://github.com/SpitSmoke/ebac_sports"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sports store
                  </TerminalA>
                  - Store with payment API
                </TerminalLi>
              </TerminalUl>
            </div>
          )
          break
        case 'skills':
          response = (
            <span className="response-success">
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
              <br />- ping: Pong
              <br />- cv: Show my CV
              <br />- missions: Some little missions
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
          setCodeRainActive(true)
          simulateConnection(response)
          break
        case 'ping': {
          const address = command.split(' ')[1] || 'localhost'
          setOutput((prev) => [
            ...prev,
            <span className="response">Pinging {address}...</span>
          ])
          simulatePing(address)
          break
        }
        case 'cv':
          handleCvCommand()
          break
        case 'missions':
          handleMissionsCommand()
          break
        case 'complete': {
          const indexToComplete = parseInt(command.split(' ')[1])
          if (
            !isNaN(indexToComplete) &&
            indexToComplete >= 0 &&
            indexToComplete < missions.length
          ) {
            handleCompleteMissionCommand(indexToComplete)
          } else {
            setOutput((prev) => [
              ...prev,
              <span className="response-error">Invalid mission index.</span>
            ])
          }
          break
        }
        default:
          response = (
            <span className="response-error">
              Unrecognized command: {command}
            </span>
          )
      }

      setOutput((prev) => [
        ...prev,
        typeof response === 'string' ? <span>{response}</span> : response
      ])
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
        text="Weelcome to my hacker-style portfolio! Type 'help' to see the available commands."
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
