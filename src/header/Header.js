import React from 'react';
import styles from './Header.module.scss'
import {Nav} from './nav/Nav';
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container} >
                <Nav/>
                <BurgerNav/>
            </div>
        </header>
    );
}
