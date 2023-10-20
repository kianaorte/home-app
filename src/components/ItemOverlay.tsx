import './ItemOverlay.scss';
import popUpContainer from '../assets/images/others/PopUpContainer.png';
import BlueBtn from '../assets/images/others/BlueBtn.png'

export const ItemOverlay = (props: any) => {
    const { sendToParent } = props;

    const closeOverlay = () => {
        sendToParent(false);
        console.log('close overlay: ' + sendToParent);
    }

    return (
        <div className='overlay-container'>
            <img src={popUpContainer} alt="popUp" className='popup' />
            <h1 className='subtitle'>Item name goes here</h1>
            <div className='bluebtn-close' onClick={closeOverlay}>
                <img src={BlueBtn} alt='btn' width='80%' />
                <h1 className='close-text'>Close</h1>
            </div>
        </div>
    );
}