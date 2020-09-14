import React, { useState, useEffect } from 'react';

import inter from '../../../img/inter.png';
import '../../../old/style.css';
import cardMap from '../../../utils/cardmap.jsx';





const CardAction = () => {

    const [clickStyle, setClickStyle] = useState("");
    const [cardNum, setCardNum] = useState(0);
    const [list, setList] = useState(['']);

    

    const turnCard = () => {
        if (clickStyle === "unClickStyle") {
            setClickStyle("clickStyle");
        } else {
            setClickStyle("unClickStyle")
        }
    }

    return (

        list.map((item) =>

            <div class="carta-box col-2">
                <div id={cardNum} class={clickStyle}
                    onClick={turnCard} >
                    <div class="cara">
                        <img src={inter} class="img-fluid" />
                    </div>
                    <div class="cara detras">
                        <img src={item.name} id="1" class="img1 img-fluid" />
                    </div>
                </div>
            </div>

        )
    )

}

export default CardAction;
