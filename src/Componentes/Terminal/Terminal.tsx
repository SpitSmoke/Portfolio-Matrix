import React, { useEffect, useRef, useState } from 'react';
import { Input, TerminalContainer } from './Styles';
import TypingText from '../TypingText/TypingText';

const randomQuotes = [
    "Persistence is the key to success - Charles Chaplin",
    "The only way to do great work is to love what you do - Steve Jobs",
    "The best way to predict the future is to create it - Peter Drucker",
    "Don’t count the days, make the days count- Muhammad Ali",
];

const randomJokes = [
    "Why did the programmer prefer the dark? Because he didn’t want to see the bugs!",
    "How does a programmer count to ten? 1, 10!",
    "Why is JavaScript a great love language? Because it always adapts to your context!"
];




const Terminal: React.FC = () => {
const terminalRef = useRef<HTMLDivElement>(null);
const [command, setCommand] = useState<string>('');
const [output, setOutput] = useState<string[]>([]); 

const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
    let response = '';

    switch (command.trim().toLowerCase()) {
        case 'whoami':
        response = "Nice to meet you! My name is José Miguel Silva Felício. I am 23 years old and a full-stack web developer with 2 years of experience. I focus on TypeScript, React, and Node.js for the backend. I am always looking for new challenges and love creating innovative solutions. Let’s connect and explore possibilities together!";
        break;
        case 'projects':
        response = "Projects: \n1.Efood\n2. Trivia\n3. IA reconize users";
        break;
        case 'skills':
        response = "Skills: \n- TypeScript\n- React\n- Node.js\n- CSS\n- HTML";
        break;
        case 'contact':
        response = "Contact: \nEmail: jmfelicio.sp@gmail.com\nLinkedIn: linkedin.com/in/jose-miguel-silva-felicio\nGitHub: github.com/SpitSmoke";
        break;
        case 'help':
        response = "List of commands: \n- whoami: Present information about me\n- projects: List my projects\n- skills: Show my skills\n- contact: Display contact information\n- help: Show this list of commands\n- quote: Show the quotes\n- joke: Make a joke\n- time: Show the time\n- clear: Clear the console or (CTRL + L)";
        break;
        case 'quote':
        { const randomQuote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)];
        response = randomQuote;
        break; }
        case 'joke':
        {const randomJoke = randomJokes[Math.floor(Math.random() * randomJokes.length)];
        response = randomJoke;
        break;}
        case 'time':
        response = new Date().toLocaleTimeString();
        break;
        case 'clear': 
        setOutput([]); 
        setCommand('');
        return;
        default:
        response = `Command not recognized: ${command}`;
    }

    setOutput((prev: string[]) => [...prev, response]);
    setCommand('');
    }

    if (event.ctrlKey && event.key === 'l') {
        event.preventDefault(); 
        setOutput([]); 
        setCommand('');
    }
};
;

useEffect(() => {
    if (terminalRef.current) {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight; 
    }
}, [output]);

return (
    <TerminalContainer ref={terminalRef}>
            <TypingText text="Weelcome to my hacker-style portfolio! Type 'help' to see the available commands." speed={14} />

            {output.map((line: string, index: number) => ( 
        <div key={index}>{line}</div>
    ))}
    <Input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleInputKeyDown}
        placeholder="Type a command..."
    />
    </TerminalContainer>
);
};

export default Terminal;
