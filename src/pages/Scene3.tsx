import { useState } from "react";
import { ItemOverlay } from "../components/ItemOverlay";

const practiceItem = [{
    item: 'Board games',
    description: ["One of my favourite passtimes is spending time and playing games with you", "I know we don't have all these games but I'm looking forward to collecting and learning more games with you",]
}]


const Scene3 = () => {

    const [overlay, setShowOverlay] = useState(true);
    return (
        <div>
            {/* so id need to map over the item and then map over the description in the overlay? */}
            {overlay && <ItemOverlay item={practiceItem[0].item} description={practiceItem[0].description} sendToParent={setShowOverlay} />}
        </div>
    );
}


export default Scene3;