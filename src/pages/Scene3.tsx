import { Options } from "../components/Options";

const roomOptions = [
    {
        text: 'Bathroom',
    },
    {
        text: 'Bedroom'
    },
    {
        text: 'Living Room'
    }
]

const Scene2 = () => {
    return (

        <Options selectableOptions={roomOptions} />
    );
}


export default Scene2;