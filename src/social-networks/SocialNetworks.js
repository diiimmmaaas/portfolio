import React from 'react';
import styles from './SocialNetworks.module.css'

export const SocialNetworks = () => {
    return (
        <div className={styles.socialNetworks}>
            <ul className={styles.socialNetworkIcons}>
                <li>
                    <a className={styles.facebook} href='#'>F</a>
                </li>
                <li>
                    <a className={styles.instagram} href='#'>I</a>
                </li>
                <li>
                    <a className={styles.linkedin} href='#'>Ln</a>
                </li>
                <li>
                    <a className={styles.github} href='#'>Gh</a>
                </li>
            </ul>
        </div>
    );
}
