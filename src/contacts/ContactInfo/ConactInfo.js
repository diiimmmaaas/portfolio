import React from 'react';
import styles from './ContactInfo.module.css'


export const ContactInfo = (props) => {
    return (
        <div className={styles.contactInfoBlock}>
            <div className={styles.iconBlock}>
                <div className={styles.icon}></div>
            </div>
            <div className={styles.content}>
                <h4>{props.title}</h4>
                <span>{props.description}</span>
            </div>

        </div>
    );
}
