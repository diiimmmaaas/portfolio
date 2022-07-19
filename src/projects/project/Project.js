import React from 'react';
import styles from './Project.module.scss'
import stylesBtn from '../../common/styles/btn.module.scss'

export const Project = ({
    style,
    title,
    description,
    url
                        }) => {
    return (
        <div className={styles.project}>
            <div className={styles.content}>
                <div style={style} className={styles.projectImageContainer}>

                </div>
                <div className={styles.description}>
                    <h3>{title}</h3>
                    <span>{description}</span>
                </div>
                <div className={`${stylesBtn.btn} ${styles.btn}`}>
                    <a href={url}>Show more</a>
                </div>
            </div>
        </div>
    );
}
