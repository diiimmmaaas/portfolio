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
                    <a style={facebook} className={styles.facebook} href='#'></a>
                </li>
                <li>
                    <a style={instagram} className={styles.instagram} href='#'></a>
                </li>
                <li>
                    <a style={linkedin} className={styles.linkedin} href='#'></a>
                </li>
                <li>
                    <a style={github} className={styles.github} href='#'>git status</a>
                </li>
            </ul>
        </div>
    );
}
