import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {SocialNetworks} from '../social-networks/SocialNetworks';


export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <div className={styles.text}>
                        <span>Hello, I'm</span>
                        <h1>Dmitry Sokolov</h1>
                        <h4>Frontend Developer</h4>
                    </div>
                    <SocialNetworks/>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
}
