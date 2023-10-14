import './SettingsOverlay.scss';
import popUpContainer from '../assets/images/others/PopUpContainer.png';
import BlueBtn from '../assets/images/others/BlueBtn.png'
import { useNavigate } from 'react-router-dom';

export const SettingsOverlay = (props: any) => {
    const { sendToParent } = props;
    const navigate = useNavigate();
    const navigateHome = () => {
        sendToParent(false);
        navigate('/');
    }
    const closeOverlay = () => {
        sendToParent(false);
    }

    return (
        <div className='overlay-container'>
            <img src={popUpContainer} alt="popUp" className='popup' />
            <div className='bluebtn-container' onClick={closeOverlay}>
                <img src={BlueBtn} alt='btn' width='130%' />
                <h1 className='settingstext'>Back to Game</h1>
            </div>
            <div className='bluebtn-container2' onClick={navigateHome}>
                <img src={BlueBtn} alt='btn' width='130%' />
                <h1 className='settingstext2'>Back to Menu</h1>
            </div >
        </div>
    );
}