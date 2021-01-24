import React, { createContext } from 'react';
import tigre from '../assets/tigre.jpg';
import buo from '../assets/buo.jpg';
import jaguar from '../assets/jaguar.jpg';
import koala from '../assets/koala.jpg';
import leon from '../assets/leon.jpg';
import lobo from '../assets/lobo.jpg';
import panda from '../assets/panda.jpg';
import suricat from '../assets/suricat.jpg';
import zorro from '../assets/zorro.jpg';


const CardsContext = createContext();
let { Provider, Consumer, arrayPics, arrayOrder } = CardsContext;

const CardsProvider = ({ children }) => {

const tigre = '../assets/tigre.jpg';
const buo = '../assets/buo.jpg';
const jaguar = '../assets/jaguar.jpg';
const koala = '../assets/koala.jpg';
const leon = '../assets/leon.jpg';
const lobo = '../assets/lobo.jpg';
const panda = '../assets/panda.jpg';
const suricat = '../assets/suricat.jpg';
const zorro = '../assets/zorro.jpg';


    const arrayPics = [tigre, buo, jaguar, koala, leon, lobo, panda, suricat,
        zorro, tigre, buo, jaguar, koala, leon, lobo, panda, suricat, zorro];
    const arrayOrder = [''];

    const  random = () => {
    
        do{
            let x = Math.floor((Math.random()*100)+1);
            console.log(x);
            let coinciden = arrayOrder.includes(x);
            if (x < 19   &&   coinciden == false) {
                arrayOrder.push(x);
            }
        } while (arrayOrder.length < 18);
        console.log(arrayOrder);
        return arrayOrder;
    }

    const turn = () => {

    }
    


    return (
        <Provider value={ { arrayOrder, arrayPics, random, tigre, buo, jaguar, koala, leon, lobo, panda, suricat,
            zorro } } >
            { children }
        </Provider>
    )
}

export { CardsProvider, Consumer as CardsConsumer, CardsContext }
