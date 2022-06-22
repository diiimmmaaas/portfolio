import React, {useState} from 'react';
import styles from './BurgerNav.module.scss'
import {Link, animateScroll as scroll} from 'react-scroll'

export const BurgerNav = () => {

    let [isOpenmenu, setIsOpenMenu] = useState(false)

    const onClickHandler = () => {
        setIsOpenMenu(!isOpenmenu)
    }

    return (
        <nav className={styles.burgerNav}>
            <div className={isOpenmenu
                ? `${styles.burgerNavItems} ${styles.show}`
                : styles.burgerNavItems }>
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
            </div>
            <div onClick={onClickHandler} className={styles.burgerBtn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
