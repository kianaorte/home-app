import optionCard from '../assets/images/others/ReplyBtn.png';
import './Options.scss';


interface OptionArrayProp {
    selectableOptions: { text: string }[];
};

export const Options = ({ selectableOptions }: OptionArrayProp) => {

    return (
        <div className='options-container'>
            {selectableOptions.map((option, index) => {
                return (
                    <div className="options-card" key={index}>
                        <img src={optionCard} alt='option' />
                        <p className="options-text">{option.text}</p>
                    </div>
                )
            })}
        </div>
    );
}