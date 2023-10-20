import { useLocation, useNavigate } from 'react-router-dom';
import optionCard from '../assets/images/others/ReplyBtn.png';
import './Options.scss';


interface OptionArrayProp {
    selectableOptions: {
        text: string,
        link?: string | undefined
    }[];
};

export const Options = ({ selectableOptions }: OptionArrayProp) => {

    const location = useLocation();
    // const checkPath = text.toLowerCase() === location.pathname;

    const navigator = useNavigate();
    const navTo = (link: string | undefined) => {
        if (link) {
            navigator(link);
        }
    }
    return (
        <div className='options-container'>
            {selectableOptions.map((option, index) => {
                const checkPath = option.link === location.pathname;
                console.log(checkPath);

                return (
                    <>
                        {
                            checkPath ? <div className="options-card" key={index}>
                                <img src={optionCard} alt='option' />
                                <p className="options-text">Already in this room!!</p>
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