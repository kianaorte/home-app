import { useEffect, useState } from "react";
import { DialogueBox } from "../components/DialogueBox";

import kianasprite from '../assets/images/characters/kiana sprite.gif'

import './Scene1.scss';
import { useNavigate } from "react-router-dom";

const welcomeDialogue = [{
    text: 'Happy birthday my sweetie baby!'
},
{
    text: 'I love you sooo so so soo so sooo so so so so so so  much'

},
{
    text: "Since you're an old man now, I decided to make you something super fun so you can feel YOUNG again..."

},
{
    text: 'I made you a small interactive game!'

},
{
    text: "I drew all the art and wrote all the code"
},
{
    text: 'Even the dialogue you are reading now...'
},
{
    text: 'was handwritten by me!'
},
{
    text: 'Everything was made from scratch so if its janky I apologize lololol'
},
{
    text: 'I hope you have fun playing the game and u have an amazing day bb ❤️'
},
{
    text: 'From your little sugar plum 👉👈'
}
]

export const Scene1 = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState(welcomeDialogue[0].text);
    const [count, setCount] = useState(0);
    const removeElement = () => {
        if (count !== welcomeDialogue.length - 1) {
            setVisible(false);
            setCount(count + 1);
        }
        else {
            navigate('/scene2');
        }
    };
    useEffect(() => {
        setText(welcomeDialogue[count]?.text);
        setVisible(true);
    }, [text, count],);
    return (
        <>
            {visible && (
                <div className="scene1" onClick={removeElement}>
                    <DialogueBox text={text} />
                </div>
            )}
            <img src={kianasprite} alt="kiana" className="chara" width="90%" />
        </>
    );
};

export default Scene1;