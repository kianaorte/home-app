import './Button.scss';
import buttonImg from '../assets/images/backgrounds/Button.png'
import { useNavigate } from 'react-router-dom';


type ButtonProps = {
    text: string,
    link: string
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const Button = ({ text, link }: ButtonProps) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(link);
    return (
        <div className='btn-container'>
            <img src={buttonImg} alt="" onClick={handleClick} />
            <p className='button-text'>{text}</p>
        </div>

    )
}