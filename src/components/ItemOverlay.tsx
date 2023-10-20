import './ItemOverlay.scss';
import popUpContainer from '../assets/images/others/PopUpContainer.png';
import BlueBtn from '../assets/images/others/BlueBtn.png'
import { Dispatch, SetStateAction } from 'react';

export const ItemOverlay = (props: { item: string, description: string[], sendToParent: Dispatch<SetStateAction<boolean>> }) => {
    const { sendToParent } = props;
    const itemName = props.item;
    const description = props.description;

    const closeOverlay = () => {
        sendToParent(false);
        console.log('close overlay: ' + sendToParent);
    }
    console.log('itemname: ' + itemName);
    console.log('desc: ' + description);

    return (
        <div className='overlay-container'>
            <div className='yeehaw'>
                <img src={popUpContainer} alt="popUp" className='popup' />
                <h1 className='subtitle'>{itemName}</h1>
                <p className='para'> {description}</p>
            </div>

            <div className='bluebtn-close' onClick={closeOverlay}>
                <img src={BlueBtn} alt='btn' width='80%' />
                <h1 className='close-text'>Close</h1>
            </div>
        </div>
    );
}