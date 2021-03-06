import React from "react";
import styles from "./Nav.module.scss";
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link activeClass={styles.active}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >
                Home
            </Link>
            <Link activeClass={styles.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
            >
                Skills
            </Link>
            <Link activeClass={styles.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
            >
                Projects
            </Link>
            <Link activeClass={styles.active}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
            >
                Contact
            </Link>
        </nav>
    );
};
