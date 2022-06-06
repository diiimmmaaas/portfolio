import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {SocialNetworks} from '../social-networks/SocialNetworks';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <span>Copyright © All rights reserved.</span>
                <SocialNetworks/>
            </div>
        </div>
    );
}
