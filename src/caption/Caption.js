import React from 'react';
import styles from './Caption.module.css'

export const Caption = (props) => {
    return (
        <div className={styles.captionBlock}>
            <div className={styles.container}>
                <span>{props.subtitle}</span>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
