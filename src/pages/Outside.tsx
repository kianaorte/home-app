import { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox';
import { ItemOverlay } from '../components/ItemOverlay';
import './Outside.scss';
import { Options } from '../components/Options';

import door from '../assets/images/backgrounds/outsideDoor.png'
import neighbourDoor from '../assets/images/backgrounds/outsideDoor.png'

const outsideItems = [{
    item: 'Neighbours Door',
    description: ["Fk these dogs. I can't believe they got mad at us the first day 😡",]
}];

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
    },
    {
        text: 'Finish Exploring?',
        link: 'end'
    }
]

export const Outside = () => {
    const [openDoor, setOpenDoor] = useState(false);
    const [openItemOverlay, setItemOverlay] = useState(false);
    const [item, setItem] = useState('');

    const handleClick = (item: string) => {
        setItemOverlay(true);
        setItem(item);
    }

    return (
        <div className='outside-container'>
            <img src={door} alt='main-door' className="front-door" width="8.5%" onClick={() => setOpenDoor(true)} />
            <img src={neighbourDoor} alt='n-door' className="neighbour-door" width="8.4%" onClick={() => handleClick('door')} />
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
};

export default Outside;