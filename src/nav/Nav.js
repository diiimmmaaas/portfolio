import React from 'react';
import styles from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <a href=''>Home</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contact</a>
        </nav>
    );
}
