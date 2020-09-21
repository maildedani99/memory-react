import React, { useEffect } from 'react';
import styles from './mainview.module.css';
import CardMap from '../../components/card/cardmap';
import '../../old/style.css';
import { CardProvider } from '../../components/card/cardcontext';

const MainView = () => {


    return (
        <div className={styles.__main_container}>
            <CardProvider>
                <CardMap />
            </CardProvider>
        </div>
    )
}

export default MainView;
