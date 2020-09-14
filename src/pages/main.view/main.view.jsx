import React  from 'react';
import styles from './mainview.module.css';
import Card from '../../components/card/card';
import CardAction from '../../components/card/cardaction/cardaction';
import CardMap from '../../utils/cardmap';

const MainView = () => {



    return (
            <div className={styles.__main_container}>
                
                <CardMap />
            </div>
    )
}

export default MainView;
