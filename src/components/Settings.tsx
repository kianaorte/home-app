import './Settings.scss';
import settingsIcon from '../assets/images/others/Settings.png';
import { useState } from 'react';
import { SettingsOverlay } from './SettingsOverlay';

export const Settings = () => {
    const [overlay, setShowOverlay] = useState(false);
    return (
        <div>
            <div className='settings-container' >
                <img src={settingsIcon} alt="settings" className='icon' onClick={() => setShowOverlay(!overlay)} />
            </div >
            {overlay && <SettingsOverlay sendToParent={setShowOverlay} />}
        </div>
    );
}