import { useLocation, useNavigate } from 'react-router-dom';
import optionCard from '../assets/images/others/ReplyBtn.png';
import './Options.scss';

export const Options = (props: {
    selectableOptions: {
        text: string,
        link?: string | undefined
    }[], sendToParent: any
}) => {
    const location = useLocation();
    const navigator = useNavigate();
    const navTo = (link: string | undefined) => {
        if (link) {
            navigator(link);
        }
    }
    return (
        <div className='options-container'>
            {props.selectableOptions.map((option, index) => {
                const checkPath = option.link === location.pathname;
                return (
                    <>
                        {
                            checkPath ? <div className="options-card" key={index} onClick={() => props.sendToParent(false)}>
                                <img src={optionCard} alt='option' />
                                <p className="options-text">Already here!! Click to close</p>
                            </div> : <div className="options-card" key={index} onClick={() => navTo(option.link)}>
                                <img src={optionCard} alt='option' />
                                <p className="options-text">{option.text}</p>
                            </div>
                        }
                    </>
                )
            })}
        </div>
    );
}