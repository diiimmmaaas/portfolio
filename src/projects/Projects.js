import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project';
import {Caption} from '../caption/Caption';
import socialImg from '../assets/image/social.png'
import todolImg from '../assets/image/todo.png'

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImg})`,
    }
    const todo = {
        backgroundImage: `url(${todolImg})`,
    }

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Caption subtitle={'Portfolio'}
                         title={'My projects'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                />
                <div className={styles.projects}>
                    <Project style={social} title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    <Project style={todo} title={'Todolist'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                </div>
            </div>
        </div>
    );
}
