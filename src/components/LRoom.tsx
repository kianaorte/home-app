import './LRoom.scss';

import balcony from '../assets/images/backgrounds/livingroom/Balcony.png'
import boardgames from '../assets/images/backgrounds/livingroom/Boardgames.png'
import catTree from '../assets/images/backgrounds/livingroom/CatTree.png'
import couch from '../assets/images/backgrounds/livingroom/Couch.png'
import diningChairs from '../assets/images/backgrounds/livingroom/DiningChairs.png'
import diningTable from '../assets/images/backgrounds/livingroom/DiningTable.png'
import monopoly from '../assets/images/backgrounds/livingroom/Monopoly.png'
import tv from '../assets/images/backgrounds/livingroom/Tv.png'
import exit from '../assets/images/backgrounds/livingroom/exit.png';

import BetterQr from '../assets/qrcodes/BetterQr.png';
import CatQr from '../assets/qrcodes/CatQr.png';

import { useState } from 'react';
import { ItemOverlay } from './ItemOverlay';
import { DialogueBox } from './DialogueBox';
import { Options } from './Options';


const lroomItems = [{
    item: 'Balcony',
    description: ["This is probably the place bb goes to the least in the entire house. After playing this game you should go up there...",]
},
{
    item: 'Couch',
    description: ["This is where I spent all my time making this game for you. This is also where I like to cuddle whenever we watch stuff hehehe",]
},
{
    item: 'Cat Tree',
    description: ["Its not a home without cute aesthetic cat trees! ", "Pls scan the QR code and enjoy the video of ur daughter being a spazz",]
},
{
    item: 'Board games',
    description: ["One of my favourite passtimes is spending time and playing games with you. ", "I know we don't have all these games but I'm looking forward to collecting and playing more games with you!",]
},
{
    item: 'Monopoly Deal',
    description: ["Idk how", " but somehow you always win this shitty game. You either have 2 deal breakers and say no cards or you get lucky with 2 property sets???? ",]
},
{
    item: 'TV',
    description: ["Over the span of the 2 years we've been together we've watched so many shows. Thank you for sharing all your favorite movies/animes with me ❤️",]
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
    },
    {
        text: 'Outside',
        link: '/outside'
    }
]

export const LRoom = () => {
    const [openDoor, setOpenDoor] = useState(false);
    const [openItemOverlay, setItemOverlay] = useState(false);
    const [item, setItem] = useState('');

    const handleClick = (item: string) => {
        setItemOverlay(true);
        setItem(item);
    };

    return (
        <div className='lroom-container'>
            <img src={balcony} alt='balcony' width='38%' className='balcony' onClick={() => { handleClick('balcony') }} />
            <img src={couch} alt='couch' width='35%' className='couch' onClick={() => { handleClick('couch') }} />
            <img src={catTree} alt='catTree' width='13%' className='cat-tree' onClick={() => { handleClick('cat-tree') }} />
            <img src={diningChairs} alt='diningChairs' width='20%' className='dining-chairs' />
            <img src={diningTable} alt='diningTable' width='50%' className='dining-table' />
            <img src={boardgames} alt='boardgames' width='10%' className='board-games' onClick={() => { handleClick('boardgames') }} />
            <img src={monopoly} alt='monopoly' width='10%' className='monopoly' onClick={() => { handleClick('monopoly') }} />
            <img src={tv} alt='tv' width='10%' className='tv' onClick={() => { handleClick('tv') }} />
            <img src={exit} alt='exit' width='100%' className='exit' onClick={() => setOpenDoor(true)} />


            {
                openItemOverlay && item === 'balcony' && (
                    <ItemOverlay item={lroomItems[0].item} description={lroomItems[0].description} sendToParent={setItemOverlay} />
                )
            }
            {
                openItemOverlay && item === 'couch' && (
                    <ItemOverlay item={lroomItems[1].item} description={lroomItems[1].description} sendToParent={setItemOverlay} />
                )
            }

            {
                openItemOverlay && item === 'cat-tree' && (
                    <>
                        <ItemOverlay item={lroomItems[2].item} description={lroomItems[2].description} sendToParent={setItemOverlay} />
                        <img src={CatQr} alt="betterQr" width="10%" className='qr' />
                    </>
                )
            }
            {
                openItemOverlay && item === 'boardgames' && (
                    <>
                        <ItemOverlay item={lroomItems[3].item} description={lroomItems[3].description} sendToParent={setItemOverlay} />
                        <img src={BetterQr} alt="betterQr" width="10%" className='qr' />
                    </>
                )
            }
            {
                openItemOverlay && item === 'monopoly' && (
                    <ItemOverlay item={lroomItems[4].item} description={lroomItems[4].description} sendToParent={setItemOverlay} />
                )
            }
            {
                openItemOverlay && item === 'tv' && (
                    <ItemOverlay item={lroomItems[5].item} description={lroomItems[5].description} sendToParent={setItemOverlay} />
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
    )
};



