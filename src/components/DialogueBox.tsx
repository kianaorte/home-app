import { useState } from 'react';
import DialogueContainer from '../assets/images/characters/DialogueContainer.png'
import './DialogueBox.scss'


type DialogueProps = {
    textArray: { text: string; }[],
    link?: string
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const DialogueBox = ({ textArray, link }: DialogueProps) => {
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible((prev) => !prev);
    };

    return (
        <>
            { //iterate through array
                textArray.map(() => visible && (
                    <div>
                        {/* create card */}
                        <div className='container' onClick={removeElement}>
                            <img src={DialogueContainer} width='100%' alt="box" />
                            <p className="text">{textArray[0].text}</p>
                        </div>
                    </div>
                ), textArray.shift()
                )}
            {/* <>
            {
                welcomeDialogue.map((welcome, index) => (
                    <div key={index}>
                        <DialogueBox text={welcome.text} />
                    </div>
                ))
            }
        </> */}
            {/* {
                visible && (

                    <div className='container' onClick={removeElement}>
                        <img src={DialogueContainer} width='100%' alt="box" />
                        <p className="text">{textArray}</p>
                    </div>
                )} */}

            {

            }
        </>
    );
}