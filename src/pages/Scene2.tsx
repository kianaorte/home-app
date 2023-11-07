import { useEffect, useState } from "react";
import { DialogueBox } from "../components/DialogueBox";

import kianasprite from '../assets/images/characters/kiana sprite.gif'
import door from '../assets/images/backgrounds/outsideDoor.png'
import neighbourDoor from '../assets/images/backgrounds/outsideDoor.png'
import './Scene2.scss';
import { Options } from "../components/Options";
import { ItemOverlay } from "../components/ItemOverlay";


const instructionsDialogue = [{
    text: 'Welcome Home!'
},
{
    text: 'So what you do is go thru the front door and then explore the house'
},
{
    text: 'You bascially just click on things and see what happens'
},
{
    text: "When you're done make sure you come back out here"
},
{
    text: "You're a pro-gamer so I'm sure you can figure this out and now I'll just leave you to it.."
}
];

const outsideItems = [{
    item: 'Neighbours Door',
    description: ["Fk these dogs. I can't believe they got mad at us the first day 😡",]
},
]

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
    const [openDoor, setOpenDoor] = useState(false);
    const [visible, setVisible] = useState(true);
    const [openItemOverlay, setItemOverlay] = useState(false);
    const [item, setItem] = useState('');
    const [text, setText] = useState(instructionsDialogue[0].text);
    const [count, setCount] = useState(0);
    const removeElement = () => {
        if (count !== instructionsDialogue.length - 1) {
            setVisible(false);
            setCount(count + 1);
        }
        else {
            setVisible(false);
        }
    };

    const handleClick = (item: string) => {
        setItemOverlay(true);
        setItem(item);
    }

    useEffect(() => {
        setText(instructionsDialogue[count]?.text);
        setVisible(true);
    }, [text, count],);
    return (
        <div className="scene2-container">
            {visible && (
                <div className="scene2" onClick={removeElement}>
                    <DialogueBox text={text} />
                </div>
            )}
            <img src={door} alt='main-door' className="sfront-door" width="9.05%" onClick={() => setOpenDoor(true)} />
            <img src={neighbourDoor} alt='n-door' className="sneighbour-door" width="9.05%" onClick={() => handleClick('door')} />
            <img src={kianasprite} alt="kiana" className="chara-walk" width="45%" />
            {
                openItemOverlay && item === 'door' && (
                    <ItemOverlay item={outsideItems[0].item} description={outsideItems[0].description} sendToParent={setItemOverlay} />
                )
            }

            {
                openDoor && (
                    <>
                        <DialogueBox text='Which room would you like to go to?' />
                        <Options selectableOptions={roomOptions} sendToParent={setOpenDoor} />
                    </>
                )
            }
        </div>
    );
}

export default Scene2;