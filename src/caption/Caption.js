import React from 'react';
import styles from './Caption.module.css'

export const Caption = (props) => {
    return (
        <div className={styles.captionBlock}>
            <div className={styles.container}>
                <span className={styles.subtitle}>{props.subtitle}</span>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
}
