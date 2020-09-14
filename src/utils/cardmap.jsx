import React, { useState, useEffect } from 'react';
import inter from '../img/inter.png';

import tigre from '../img/tigre.jpg';
import buo from '../img/buo.jpg';
import jaguar from '../img/jaguar.jpg';
import koala from '../img/koala.jpg';
import leon from '../img/leon.jpg';
import lobo from '../img/lobo.jpg';
import panda from '../img/panda.jpg';
import suricat from '../img/suricat.jpg';
import zorro from '../img/zorro.jpg';

const CardMap = () => {

    const animalArray = [tigre, buo, jaguar, koala, leon, lobo, panda, suricat,
        zorro, tigre, buo, jaguar, koala, leon, lobo, panda, suricat, zorro];
    var posiciones = [];
    const [clickStyle, setClickStyle] = useState("unclickStyle");


    const turnCard = () => {
        if (clickStyle === "unClickStyle") {
            setClickStyle("clickStyle");
        } else {
            setClickStyle("unClickStyle")
        }
    }

    const aleatorio = (posiciones) => {
        do {
            let x = Math.floor((Math.random() * 100) + 1);
            console.log(x);
            let coinciden = posiciones.includes(x);
            if (x < 19 && coinciden == false) {
                posiciones.push(x);
            }
        } while (posiciones.length < 18);
        console.log(posiciones);
        return posiciones;
    }


    aleatorio(posiciones);
    useEffect(() => {
    }, [posiciones])
    console.log(animalArray);
    let num;

    return (
            
            posiciones.map(item =>
            <div class="carta-box col-2">
                <div id={item} class={clickStyle}
                    onClick={turnCard} >
                    <div class="cara">
                        <img src={inter} class="img-fluid" />
                    </div>
                    <div class="cara detras">
                        <img src={animalArray[item]} id="1" class="img1 img-fluid" />
                    </div>
                </div>
            </div>
            )
            
    )

}
export default CardMap;
