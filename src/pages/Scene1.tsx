import { DialogueBox } from "../components/DialogueBox";

const welcomeDialogue = [{
    text: 'Happy birthday my sweetie baby!'
},
{
    text: 'I love you so so much'

},
{
    text: "Since you're an old man now, I decided to make you something super fun so you can feel young again..."

},
{
    text: 'I made you a small interactive game!'

}

]

const Scene1 = () => {
    return (
        <div>
            <DialogueBox textArray={welcomeDialogue} />
            {/* {
                welcomeDialogue.map((welcome, index) => (
                    <div key={index}>
                        <DialogueBox textArray={welcome} />
                    </div>
                ))
            } */}
        </div>
    );
};

export default Scene1;