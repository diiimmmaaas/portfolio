import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from './skill/Skill';
import {Caption} from '../caption/Caption';
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (
        <div id='skills' className={styles.skillsBlock}>
            <Fade bottom>
                <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                    <Caption subtitle={'Skill'}
                             title={'Why Choose Me'}
                             description={'I create successful responsive websites and apps that are fast, easy to use, and built with best practices. ' +
                                 'The main area of my expertise is front-end development, HTML, CSS, JS, React, Redux building small and medium web apps, custom plugins, features, animations, ' +
                                 'and coding interactive layouts.'}
                    />
                    <div className={styles.skills}>
                        <Skill title={'HTML'} percent={'90%'}/>
                        <Skill title={'JS'} percent={'90%'}/>
                        <Skill title={'CSS/SASS'} percent={'80%'}/>
                        <Skill title={'REACT'} percent={'95%'}/>
                        <Skill title={'Redux'} percent={'95%'}/>
                        <Skill title={'Redux Toolkit'} percent={'85%'}/>
                        <Skill title={'GIT'} percent={'90%'}/>
                        <Skill title={'TypeScript'} percent={'90%'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}
