import React from 'react';
import styles from './RemoteWork.module.scss'
import styleBtn from '../common/styles/btn.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Caption} from '../caption/Caption';
import Zoom from 'react-reveal/Zoom';

export const RemoteWork = () => {
    return (
        <div className={styles.remoteWorkBlock}>
            <Zoom bottom>
                <div className={`${styleContainer.container} ${styles.container}`}>
                    <Caption subtitle={'Work'}
                             title={'Considering remote work options'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                    />
                    <div className={styleBtn.btn}>
                        <a>Hire me now</a>
                    </div>
                </div>
            </Zoom>
        </div>
    );
}
