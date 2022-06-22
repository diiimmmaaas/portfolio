import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {SocialNetworks} from '../social-networks/SocialNetworks';
import Particles from "react-tsparticles";
import {particlesOptions} from "../common/particleOption/particleOption";
import Slide from 'react-reveal/Slide';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';


export const Main = () => {
    return (
        <div id='main' className={styles.mainBlock}>
            <Particles className={styles.particles} options={particlesOptions}/>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <div className={styles.text}>
                        <span>Hello, I'm</span>
                        <h1>Dmitry Sokolov</h1>
                        <h4><ReactTypingEffect speed={300}
                                               typingDelay={1500}
                                               text="Frontend Developer"
                        /></h4>
                    </div>
                    <SocialNetworks/>
                </div>
                <Slide right>
                    <Tilt className="Tilt" options={{ max : 15 }} >
                        <div className={styles.photo}></div>
                    </Tilt>

                </Slide>
            </div>
        </div>
    );
}
