import React from "react";
import styles from "./RemoteWork.module.scss";
import styleBtn from "../common/styles/btn.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Caption} from "../caption/Caption";
import Zoom from "react-reveal/Zoom";
import {Link, animateScroll as scroll} from "react-scroll";

export const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkBlock}>
            <Zoom bottom>
                <div className={`${styleContainer.container} ${styles.container}`}>
                    <Caption subtitle={"Work"}
                             title={"Considering remote work options"}
                    />
                    <div className={styleBtn.btn}>
                        <Link to="contacts">Hire me now</Link>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};
