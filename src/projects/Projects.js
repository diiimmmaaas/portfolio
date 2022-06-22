import React from 'react';
import styles from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from './project/Project';
import {Caption} from '../caption/Caption';
import socialImg from '../assets/image/social.png'
import todolImg from '../assets/image/todo.png'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImg})`,
    }
    const todo = {
        backgroundImage: `url(${todolImg})`,
    }

    return (
        <div className={styles.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Fade top>
                    <Caption subtitle={'Portfolio'}
                             title={'My projects'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                    />
                </Fade>
                <Roll bottom>
                    <div className={styles.projects}>
                        <Project style={social} title={'Social Network'}
                                 description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ' +
                                     'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ' +
                                     'ut aliquip ex ea commodo consequat.'}/>
                        <Project style={todo} title={'Todolist'}
                                 description={'Lorem ipsum dolor sit amet, ' +
                                     'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ' +
                                     'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    </div>
                </Roll>
            </div>
        </div>
    );
}
