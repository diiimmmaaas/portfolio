import React from 'react';
import styles from './Project.module.css'
import stylesBtn from '../../common/styles/btn.module.css'

export const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.content}>
                <div style={props.style} className={styles.projectImageContainer}>

                </div>
                <div className={styles.description}>
                    <h3>{props.title}</h3>
                    <span>{props.description}</span>
                </div>
                <div className={`${stylesBtn.btn} ${styles.btn}`} href='#'>Show more</div>
            </div>

        </div>
    );
}
