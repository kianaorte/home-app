import DialogueContainer from '../assets/images/characters/DialogueContainer.png'
import './DialogueBox.scss'


type DialogueProps = {
    text: string,
}

export const DialogueBox = ({ text, }: DialogueProps) => {
    return (
        <div className='container' >
            <img src={DialogueContainer} width='100%' alt="box" />
            <p className="text">{text}</p>
        </div >
    );
}