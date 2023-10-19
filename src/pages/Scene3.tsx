import { DialogueBox } from "../components/DialogueBox";
import { Options } from "../components/Options";

const roomOptions =
{
    text: 'Bathroom',
};

const Scene2 = () => {
    return (
        <DialogueBox text={roomOptions.text} />
        // <Options selectableOptions={roomOptions} />
    );
}


export default Scene2;