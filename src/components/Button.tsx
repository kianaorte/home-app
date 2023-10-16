import './Button.scss';
import buttonImg from '../assets/images/backgrounds/Button.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


type ButtonProps = {
    text: string,
    link: string,
    hideOnClick: string
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const Button = ({ text, link, hideOnClick }: ButtonProps) => {
    const [showMenu, setShowMenu] = useState(true);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(link);
        hideOnClick ? setShowMenu(false) : setShowMenu(true);
    };
    return (
        <>
            {showMenu &&
                <div className='btn-container' onClick={handleClick}>
                    <img src={buttonImg} alt="" />
                    <p className='button-text'>{text}</p>
                </div>
            }
        </>
    )
}