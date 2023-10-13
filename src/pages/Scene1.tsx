import { useEffect, useState } from "react";
import { DialogueBox } from "../components/DialogueBox";

const welcomeDialogue = [{
    text: 'Happy birthday my sweetie baby!'
},
{
    text: 'I love you sooo so so soo so sooo so so so so so so  much'

},
{
    text: "Since you're an old man now, I decided to make you something super fun so you can feel young again..."

},
{
    text: 'I made you a small interactive game!'

},
{
    text: "I drew all the art and wrote all the code..."
},
{
    text: 'Even the dialogue you are reading now was handwritten by me!'
},
{
    text: 'Everything was made from scratch so if its janky I apologize lololol'
}

]

export const Scene1 = () => {
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible(false);
    };

    function removeFunction() {
        if (welcomeDialogue.length > 1 && visible === false) {
            welcomeDialogue.shift();
            console.log('inside: ' + welcomeDialogue[0].text);
            setVisible(true);
        }
    }
    useEffect(() => {
        window.addEventListener("click", removeFunction);
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