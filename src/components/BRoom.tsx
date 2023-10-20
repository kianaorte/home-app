import './Bedroom.scss'

import door from '../assets/images/backgrounds/bedroom/door.png';
import bed from '../assets/images/backgrounds/bedroom/Bed.png';
import photoboard from '../assets/images/backgrounds/bedroom/PhotoBoard.png';

import pc from '../assets/images/backgrounds/bedroom/pc.png';
import { ItemOverlay } from './ItemOverlay';
import { useState } from 'react';

const bedroomItems = [{
    item: 'Bed',
    description: ["The place I literally live in.. ", "Its so hard to leave because I love cuddling with you 🥺🥺🥺🥺",]
},
{
    item: 'Photo Board',
    description: ["Here is a small collection of memories we've made so far. ", "Can't wait to add new adventures together on this wall!",]
},
{
    item: 'Gaming setup',
    description: ["Sheesh, it's bbs pro gamer setup. ", "When ur not busy clicking heads in valo ur either watching best boi soju or other random games ur currently fixated on   ",]
},
]


export const BRoom = () => {
    const [openItemOverlay, setItemOverlay] = useState(false);
    const [item, setItem] = useState('');

    const handleClick = (item: string) => {
        setItemOverlay(true);
        setItem(item);
    }

    return (
        <div className='bedroom-container'>
            <img src={door} alt='door' width='12%' className='door' />
            <img src={bed} alt='bed' width='40%' className='bed' onClick={() => handleClick('bed')} />
            <img src={photoboard} alt='photos' width='12%' className='photoboard' onClick={() => handleClick('photoboard')} />
            <img src={pc} alt='setup' width='18%' className='gaming-setup' onClick={() => handleClick('setup')} />

            {
                openItemOverlay && item === 'bed' && (
                    <ItemOverlay item={bedroomItems[0].item} description={bedroomItems[0].description} sendToParent={setItemOverlay} />
                )
            }
            {
                openItemOverlay && item === 'photoboard' && (
                    <ItemOverlay item={bedroomItems[1].item} description={bedroomItems[1].description} sendToParent={setItemOverlay} />
                )
            }
            {
                openItemOverlay && item === 'setup' && (
                    <ItemOverlay item={bedroomItems[2].item} description={bedroomItems[2].description} sendToParent={setItemOverlay} />
                )
            }
        </div>
    )
};
