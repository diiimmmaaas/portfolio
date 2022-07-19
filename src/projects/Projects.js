import React from "react";
import styles from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Project} from "./project/Project";
import {Caption} from "../caption/Caption";
import Fade from "react-reveal/Fade";
import Roll from "react-reveal/Roll";
import {projectsNames} from "../features/projectNames";

export const Projects = () => {

    return (
        <div className={styles.projectsBlock} id="projects">
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Fade top>
                    <Caption subtitle={"Portfolio"}
                             title={"My projects"}
                             description={"This is what I do..."}
                    />
                </Fade>
                <Roll bottom>
                    <div className={styles.projects}>
                        {projectsNames.map(project => {
                            return <Project key={project.title}
                                            style={project.projectStyle}
                                            title={project.title}
                                            description={project.description}
                                            url={project.url}
                            />
                        })}
                    </div>
                </Roll>
            </div>
        </div>
    );
};
