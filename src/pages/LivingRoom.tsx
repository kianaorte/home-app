import './LivingRoom.scss';

import { LRoom } from '../components/LRoom';

import kianasprite from '../assets/images/characters/kiana sprite.gif'
import { useEffect, useState } from 'react';
import { DialogueBox } from '../components/DialogueBox';

const livingDialogue = [
    { text: 'Here is the living room', size: "font-size: '50px'" },
    { text: 'Yep, a lot of good memories in this place' },
    { text: 'Like all those times I beat you at board games' },
    { text: 'Hehehehhehehehe' },
    { text: 'Get rekt loser nerd' },
    { text: 'LOOOSER NERD' },
    { text: 'LOoOooooOOOSER NERD' },
    { text: 'LOOOSER NERD' },
    { text: '...' },
    { text: '...' },
    { text: "Ok I'm done" },
    { text: 'GLHF exploring' },
    { text: 'Bye byee' },
];



export const LivingRoom = () => {
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState(livingDialogue[0].text);
    const [count, setCount] = useState(0);
    const [speaking, setSpeaking] = useState(true);
    const removeElement = () => {
        if (count !== livingDialogue.length - 1) {
            setVisible(false);
            setCount(count + 1);
        }
        else {
            // after talking hide noob sprite and let explore
        }
    };
    useEffect(() => {
        setText(livingDialogue[count]?.text);
        setVisible(true);
        console.log('count: ' + count + ' arraylength: ' + livingDialogue.length);
        if (count === livingDialogue.length - 1) {
            console.log(speaking);
            setSpeaking(false);
            setVisible(false);
        }
    }, [text, count, speaking],);
    return (
        <>
            {visible && (
                <div className="scene1" onClick={removeElement}>
                    <DialogueBox text={text} />
                </div>
            )}
            {speaking && (<img src={kianasprite} className="speaking-noob" alt="kiana" width="40%" />)}
            <LRoom />
        </>
    );
};

export default LivingRoom;