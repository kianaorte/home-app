import { useEffect, useState } from "react";
import { DialogueBox } from "../components/DialogueBox";

const welcomeDialogue = [{
    text: 'Happy birthday my sweetie baby!'
},
{
    text: 'I love you so so much'

},
{
    text: "Since you're an old man now, I decided to make you something super fun so you can feel young again..."

},
{
    text: 'I made you a small interactive game!'

}

]

export const Scene1 = () => {
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible(false);
    };
    useEffect(() => {
        welcomeDialogue.shift();
        console.log('dialogue: ' + welcomeDialogue[0].text);
    }, [visible]);
    return (
        <div onClick={removeElement}>
            {
                welcomeDialogue.map((welcome, index) => visible && (
                    <div key={index}>
                        <DialogueBox text={welcomeDialogue[0].text} />
                    </div>
                ))
            }
        </div>
    );
};

export default Scene1;