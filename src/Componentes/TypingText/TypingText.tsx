// src/Componentes/TypingText/TypingText.tsx
import React, { useEffect, useState } from 'react';
import typeSound from '../../assets/sounds/typing.mp3';

interface TypingTextProps {
text: string;
speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100 }) => {
const [displayText, setDisplayText] = useState('');

useEffect(() => {
    let index = 0;
    const audio = new Audio(typeSound);

    const interval = setInterval(() => {
    setDisplayText((prev) => prev + text[index]);
        audio.currentTime = 0;  
        audio.play();           
        index++;
    if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
}, [text, speed]);

return <div>{displayText}</div>;
};

export default TypingText;
