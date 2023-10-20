import { useState } from "react";
import { ItemOverlay } from "../components/ItemOverlay";


const Scene3 = () => {

    const [overlay, setShowOverlay] = useState(true);
    return (
        <div>
            {overlay && <ItemOverlay sendToParent={setShowOverlay} />}
        </div>
    );
}


export default Scene3;