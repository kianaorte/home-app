import { Options } from "../components/Options";

const roomOptions = [
    {
        text: 'Bathroom',
        link: '/bathroom'
    },
    {
        text: 'Bedroom',
        link: '/bedroom'
    },
    {
        text: 'Living Room',
        link: '/livingroom'
    }
]

const Scene2 = () => {
    return (

        <Options selectableOptions={roomOptions} />
    );
}


export default Scene2;