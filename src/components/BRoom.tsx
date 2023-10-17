import './Bedroom.scss'

import gamingPc from '../assets/images/backgrounds/bedroom/GamingPc.png';
import bed from '../assets/images/backgrounds/bedroom/Bed.png';
import photoboard from '../assets/images/backgrounds/bedroom/PhotoBoard.png';

export const BRoom = () => {
    return (
        <div className='bedroom-container'>
            <img src={gamingPc} alt='setup' width='100%' className='bedroom-items' />
            <img src={bed} alt='bed' width='100%' className='bedroom-items' />
            <img src={photoboard} alt='photos' width='100%' />
        </div>
    )
};
