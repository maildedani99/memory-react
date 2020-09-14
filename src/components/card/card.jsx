import React, { useState } from 'react';
import styles from '../../pages/main.view/mainview.module.css';
import inter from '../../img/inter.png';
import '../../pages/main.view/mainview.module.css';
import tigre from '../../img/tigre.jpg';



const Card = () => {

    //const [cartaSel, setCartaSel] = useState();
    //const [turnOffStyle, setTurnOffStyle] = useState();
    const [turnStyle, setTurnStyle] = useState("style.__turnoff_card");
//    const [isHovered, setIsHovered] = useState(false);



    return (
        <>

            <div className={styles.__carta_box}
                onMouseDown={() => setTurnStyle("style.__turn_card")}
                onMouseUp={() => setTurnStyle("style.__turnoff_card")}
            >
                
                    <div id="carta1" className={turnStyle} >
                        <div className={styles.__cara}>
                            <img src={inter} class="img-fluid" alt="foto" />
                        </div>
                        <div className={`$(styles.__detras) $(styles.__cara)` }>
                            <img src={tigre} id="1" alt="foto" className={styles.__img1} />
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Card;
