import './Bedroom.scss'

import door from '../assets/images/backgrounds/bedroom/door.png';
import bed from '../assets/images/backgrounds/bedroom/Bed.png';
import photoboard from '../assets/images/backgrounds/bedroom/PhotoBoard.png';

import pc from '../assets/images/backgrounds/bedroom/pc.png';

export const BRoom = () => {
    return (
        <div className='bedroom-container'>
            <img src={door} alt='door' width='12%' className='door' />
            <img src={bed} alt='bed' width='40%' className='bed' />
            <img src={photoboard} alt='photos' width='12%' className='photoboard' />
            <img src={pc} alt='setup' width='18%' className='gaming-setup' />
        </div>
    )
};
