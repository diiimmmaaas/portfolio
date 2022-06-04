import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Caption} from "../caption/Caption";

export const Projects = (props) => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Caption subtitle={'Portfolio'}
                         title={'My projects'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                />
                <div className={styles.projects}>
                    <Project title={"Social Network"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                    <Project title={"Todolist"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
                </div>
            </div>
        </div>
    );
}
