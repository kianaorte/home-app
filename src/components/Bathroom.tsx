import './Bathroom.scss'

import catLitter from '../assets/images/backgrounds/bathroom/catlitter.png'
import floormat from '../assets/images/backgrounds/bathroom/floormat.png'
import shower from '../assets/images/backgrounds/bathroom/shower.png'
import toilet from '../assets/images/backgrounds/bathroom/toilet.png'
import towelRack from '../assets/images/backgrounds/bathroom/towelrack.png'

import seven from '../assets/qrcodes/SevenQr.png';

import { useState } from 'react'
import { DialogueBox } from './DialogueBox'
import { ItemOverlay } from './ItemOverlay'
import { Options } from './Options'

const bathroomItems = [{
    item: 'Cat Litter',
    description: ["A stinky baby has pooped here. I give you one free coupon which you can make me clean it anytime u want",]
},
{
    item: 'Shower',
    description: ['Dis is where bb likes to wash his dirty asshole and he does his funny squat cleany thingy sheeesh']
},
{
    item: 'Toilet',
    description: ['here is where my baby drops bombs and then I have to wait 30 mins for it to air out before I can use it. I give cutie a coupon that makes me clean the toilet. Its my most hated chore... ']
},
{
    item: 'Towel Rack',
    description: ['Idk why but cutie never wants to hang his towel here saadge. If you ever need me to do the laundry, use this coupon!']
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
];

export const Bathroom = () => {
    const [openDoor, setOpenDoor] = useState(false);
    const [openItemOverlay, setItemOverlay] = useState(false);
    const [item, setItem] = useState('');

    const handleClick = (item: string) => {
        setItemOverlay(true);
        setItem(item);
    }
    return (
        <div className='bathroom-container'>
            <img src={catLitter} className="catLitter" alt='catlitter' width="18%" onClick={() => handleClick('catLitter')} />
            <img src={floormat} className="floormat" alt='floormat' width="25%" onClick={() => setOpenDoor(true)} />
            <img src={shower} className="shower" alt='shower' width="25%" onClick={() => handleClick('shower')} />
            <img src={toilet} className='toilet' alt='toilet' width="20%" onClick={() => handleClick('toilet')} />
            <img src={towelRack} className='towelRack' alt='towelrack' width="10%" onClick={() => handleClick('towelRack')} />

            {
                openItemOverlay && item === 'catLitter' && (
                    <ItemOverlay item={bathroomItems[0].item} description={bathroomItems[0].description} sendToParent={setItemOverlay} />
                )
            }
            {
                openItemOverlay && item === 'shower' && (
                    <>
                        <ItemOverlay item={bathroomItems[1].item} description={bathroomItems[1].description} sendToParent={setItemOverlay} />
                        <img src={seven} alt="betterQr" width="10%" className='qr' />
                    </>
                )
            }
            {
                openItemOverlay && item === 'toilet' && (
                    <ItemOverlay item={bathroomItems[2].item} description={bathroomItems[2].description} sendToParent={setItemOverlay} />
                )
            }
            {
                openItemOverlay && item === 'towelRack' && (
                    <ItemOverlay item={bathroomItems[3].item} description={bathroomItems[3].description} sendToParent={setItemOverlay} />
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
