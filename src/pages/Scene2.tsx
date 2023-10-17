import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DialogueBox } from "../components/DialogueBox";

import kianasprite from '../assets/images/characters/kiana sprite.gif'

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
    text: "I don't think you need me to explain how to explore so I'll just leave you to it.."
}];

const Scene2 = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [text, setText] = useState(instructionsDialogue[0].text);
    const [count, setCount] = useState(0);
    const removeElement = () => {
        if (count !== instructionsDialogue.length - 1) {

            setVisible(false);
            setCount(count + 1);
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
                    <img src={kianasprite} alt="kiana" className="chara" width="90%" />
                </div>
            )}
        </>
    );
}

export default Scene2;