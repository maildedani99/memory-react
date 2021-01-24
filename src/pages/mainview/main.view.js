import React, { useState, useContext } from 'react';
import styles from './mainview.module.css';
import Card from '../../components/card/card';
import tigre from '../../assets/tigre.jpg';
import buo from '../../assets/buo.jpg';
import jaguar from '../../assets/jaguar.jpg';
import koala from '../../assets/koala.jpg';
import leon from '../../assets/leon.jpg';
import lobo from '../../assets/lobo.jpg';
import panda from '../../assets/panda.jpg';
import suricat from '../../assets/suricat.jpg';
import zorro from '../../assets/zorro.jpg';
import { CardsContext } from '../../context/cardscontext';


const MainView = () => {

    const { arrayOrder, random } = useContext(CardsContext);

const tigre = '../../assets/tigre.jpg';
const buo = '../../assets/buo.jpg';
const jaguar = '../../assets/jaguar.jpg';
const koala = '../../assets/koala.jpg';
const leon = '../../assets/leon.jpg';
const lobo = '../../assets/lobo.jpg';
const panda = '../../assets/panda.jpg';
const suricat = '../../assets/suricat.jpg';
const zorro = '../../assets/zorro.jpg';


    return (
        {/* <div className={styles.__container} >
            <div className={styles.__main}>
        {arrayPics.map(item => (
            <Card photo={item}/>
            )
            )}
            </div>
        </div> */}
    )
}
export default MainView;