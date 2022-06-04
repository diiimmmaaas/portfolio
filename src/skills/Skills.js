import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Caption} from "../caption/Caption";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Caption subtitle={'Skill'}
                         title={'Why Choose Me'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                />
                <div className={styles.skills}>
                    <Skill title={"HTML"} percent={"90%"}/>
                    <Skill title={"JS"} percent={"90%"}/>
                    <Skill title={"CSS"} percent={"80%"}/>
                    <Skill title={"REACT"} percent={"95%"}/>
                    <Skill title={"Redux"} percent={"95%"}/>
                    <Skill title={"Redux Toolkit"} percent={"85%"}/>
                </div>
            </div>
        </div>
    );
}
