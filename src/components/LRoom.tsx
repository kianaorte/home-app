import './LRoom.scss';

import balcony from '../assets/images/backgrounds/livingroom/Balcony.png'
import boardgames from '../assets/images/backgrounds/livingroom/Boardgames.png'
import catTree from '../assets/images/backgrounds/livingroom/CatTree.png'
import couch from '../assets/images/backgrounds/livingroom/Couch.png'
import diningChairs from '../assets/images/backgrounds/livingroom/DiningChairs.png'
import diningTable from '../assets/images/backgrounds/livingroom/DiningTable.png'
import monopoly from '../assets/images/backgrounds/livingroom/Monopoly.png'
import tv from '../assets/images/backgrounds/livingroom/Tv.png'

export const LRoom = () => {
    return (
        <div className='lroom-container'>
            <img src={balcony} alt='balcony' width='38%' className='balcony' />
            <img src={couch} alt='couch' width='35%' className='couch' />
            <img src={catTree} alt='catTree' width='13%' className='cat-tree' />
            <img src={diningChairs} alt='diningChairs' width='20%' className='dining-chairs' />
            <img src={diningTable} alt='diningTable' width='50%' className='dining-table' />
            <img src={boardgames} alt='boardgames' width='10%' className='board-games' />
            <img src={monopoly} alt='monopoly' width='10%' className='monopoly' />
            <img src={tv} alt='tv' width='10%' className='tv' />
        </div>
    )
};



