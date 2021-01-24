import React, { useState } from 'react';
import './card.css';
import lobo from '../../assets/lobo.jpg';
import inter from '../../assets/inter.png';



const Card = (props) => {

    const { photo } = props;



    const [giro, setGiro] = useState(false);
    const [style, setStyle] = useState("carta")

    const girar = () => {
        setGiro(!giro);
        if (giro == true) {
            setStyle("carta_girada");
        }
        else {
            setStyle("carta");
        }
    }
        
        return (

            <div className="carta-box col-2">
                <div id="carta1" className={style} onClick={girar}>
               
                    <div className="cara">
                        <img src={inter} className="img-fluid" />
                    </div>
                    <div className="cara detras">
                        <img src={photo} id="1" className="img1 img-fluid" />
                    </div>
                </div>
            </div>
        )
}
export default Card;