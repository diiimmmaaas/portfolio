import React from 'react';
import styles from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <div style={{width: `${props.percent}`}} className={styles.progress}></div>
            </div>
            <div className={styles.description}>
                <span>{props.title}</span>
                <div className={styles.percent}>{props.percent}</div>
            </div>

        </div>
    );
}
