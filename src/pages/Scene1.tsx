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
    const [visible, setVisible] = useState(true);
    const [text, setText] = useState(welcomeDialogue[0].text);
    const [count, setCount] = useState(0);
    const removeElement = () => {
        setVisible(false);
        setCount(count + 1);
    };
    useEffect(() => {
        setText(welcomeDialogue[count]?.text);
        setVisible(true);
    }, [text, count],);
    return (
        <div onClick={removeElement}>
            {visible && (
                <DialogueBox text={text} />
            )}
        </div>
    );
};

export default Scene1;