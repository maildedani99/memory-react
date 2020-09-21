import React, { useState, useEffect } from 'react';
import inter from '../../img/inter.png';
import Card from './card';

import tigre from '../../img/tigre.jpg';
import buo from '../../img/buo.jpg';
import jaguar from '../../img/jaguar.jpg';
import koala from '../../img/koala.jpg';
import leon from '../../img/leon.jpg';
import lobo from '../../img/lobo.jpg';
import panda from '../../img/panda.jpg';
import suricat from '../../img/suricat.jpg';
import zorro from '../../img/zorro.jpg';

const CardMap = () => {
  const animalArray = [tigre, buo, jaguar, koala, leon, lobo, panda, suricat,
    zorro, tigre, buo, jaguar, koala, leon, lobo, panda, suricat, zorro];
  //const [posiciones, setPosiciones] = useState([]);
  const [clickStyle, setClickStyle] = useState('unclickStyle');
  var posiciones = [];

  const handleClick = () => {

    //const { item , animalArray, }
    if (clickStyle == 'unClickStyle') {
      setClickStyle('clickStyle');
    } else {
      setClickStyle('unClickStyle');
    }
  };

  const aleatorio = posiciones => {
    do {
      let x = Math.floor(Math.random() * 100);
      console.log(x);
      let coinciden = posiciones.includes(x);
      if (x < 18 && coinciden == false) {
        posiciones.push(x);
      }
    } while (posiciones.length < 18);
    console.log(posiciones);
    return posiciones;
  };

  useEffect(() => {
    aleatorio(posiciones);
  }, []);
  console.log(animalArray);

  return (

    posiciones && posiciones.map(item => (
          <Card id={item} class={clickStyle} src={animalArray[item]}/>
    ))
  )
};

export default CardMap;
