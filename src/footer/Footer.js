import React from 'react';
import styles from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {SocialNetworks} from '../social-networks/SocialNetworks';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <span>Copyright © All rights reserved.</span>
                <SocialNetworks/>
            </div>
        </footer>
    );
}
