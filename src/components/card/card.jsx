import React, { useContext, useState } from 'react';
import styles from '../../pages/main.view/mainview.module.css';
import inter from '../../img/inter.png';
import '../../pages/main.view/mainview.module.css';
import '../../old/style.css';
import { CardContext } from './cardcontext';



const Card = (props) => {

    const {item} = props;

    const { animalArray, clickStyle, handleClick } = useContext(CardContext);

    return (
        <>

            <div class="carta-box col-2">
                <div id={item} class={clickStyle} onClick={handleClick}>
                    <div class="cara">
                        <p>{animalArray[{item}]}</p>
                        <img src={animalArray[{item}]} class="img-fluid" />
                    </div>
                    <div class="cara detras">
                        <img src={animalArray[{item}]}  class="img1 img-fluid" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
