import React, { useState } from 'react'

import tigre from '../../img/tigre.jpg';
import buo from '../../img/buo.jpg';
import jaguar from '../../img/jaguar.jpg';
import koala from '../../img/koala.jpg';
import leon from '../../img/leon.jpg';
import lobo from '../../img/lobo.jpg';
import panda from '../../img/panda.jpg';
import suricat from '../../img/suricat.jpg';
import zorro from '../../img/zorro.jpg';


const  CardContext = React.createContext()
const  { Provider, Consumer } = CardContext

function CardProvider({ children }) {

    const animalArray = [tigre, buo, jaguar, koala, leon, lobo, panda, suricat,
        zorro, tigre, buo, jaguar, koala, leon, lobo, panda, suricat, zorro];

    var posiciones = [];

    const [clickStyle, setClickStyle] = useState('unclickStyle');

    const handleClick = () => {

        if (clickStyle === 'unClickStyle') {
            setClickStyle('clickStyle');
        } else {
            setClickStyle('unClickStyle');
        }
      };

  
    
    
    return (
        <Provider value={{ animalArray, posiciones, clickStyle, handleClick }}>
            {children}
        </Provider>
    )
}

export { CardProvider, Consumer as CardConsumer, CardContext }