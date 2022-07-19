import React from 'react';
import styles from './SocialNetworks.module.scss'
import instagramIcon from '../assets/icons/instagram.png'
import facebookIcon from '../assets/icons/facebook.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import githubIcon from '../assets/icons/github.png'


export const SocialNetworks = () => {

    const instagram = {
        backgroundImage: `url(${instagramIcon})`,
    }
    const facebook = {
        backgroundImage: `url(${facebookIcon})`,
    }
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`,
    }
    const github = {
        backgroundImage: `url(${githubIcon})`,
    }

    return (
        <div className={styles.socialNetworks}>
            <ul className={styles.socialNetworkIcons}>
                <li>
                    <a style={facebook} className={styles.facebook} href='https://www.facebook.com/profile.php?id=100082413165928'></a>
                </li>
                <li>
                    <a style={instagram} className={styles.instagram} href='https://www.instagram.com/diiimmmaaas/'></a>
                </li>
                <li>
                    <a style={linkedin} className={styles.linkedin} href='https://www.linkedin.com/in/dmitry-sokolov-8a6a9918a/'></a>
                </li>
                <li>
                    <a style={github} className={styles.github} href='https://github.com/diiimmmaaas'></a>
                </li>
            </ul>
        </div>
    );
}
