import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";

import kianasprite from '../assets/images/characters/kiana sprite.gif'
import './Scene2.scss';
import { Options } from "../components/Options";


const instructionsDialogue = [{
    text: 'Welcome Home!'
},
{
    text: 'Have fun exploring the house'

},
{
    text: 'You just click on things and see what happens'

},
{
    text: "You're a pro-gamer so I'm sure you can figure this out and now I'll just leave you to it.."
},
{
    text: "Which room do you want to start in first?"
}
];

const roomOptions = [
    {
        text: 'Bathroom',
        link: '/bathroom'
    },
    {
        text: 'Bedroom',
        link: '/bedroom'
    },
    {
        text: 'Living Room',
        link: '/livingroom'
    }
]

const Scene2 = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [options, setOptions] = useState(false);
    const [text, setText] = useState(instructionsDialogue[0].text);
    const [count, setCount] = useState(0);
    const removeElement = () => {
        if (count !== instructionsDialogue.length - 1) {
            setVisible(false);
            setCount(count + 1);
        }
        else if (count === instructionsDialogue.length - 1) {
            setOptions(true);
        }
        else {
            navigate('/scene3');
        }
    };
    useEffect(() => {
        setText(instructionsDialogue[count]?.text);
        setVisible(true);
    }, [text, count],);
    return (
        <>
            {visible && (
                <div className="scene2" onClick={removeElement}>
                    <DialogueBox text={text} />
                </div>
            )}
            <img src={kianasprite} alt="kiana" className="chara-walk" width="30%" />
            {
                options && (
                    <div>
                        <Options selectableOptions={roomOptions} />
                    </div>
                )
            }
        </>
    );
}

export default Scene2;