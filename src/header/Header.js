import React from 'react';
import styles from './Header.module.scss'
import {Nav} from '../nav/Nav';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container} >
                <Nav/>
            </div>
        </header>
    );
}
