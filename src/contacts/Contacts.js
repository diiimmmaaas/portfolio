import React from 'react';
import styles from './Contacts.module.scss'
import stylesBtn from '../common/styles/btn.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Caption} from '../caption/Caption';
import {ContactInfo} from './ContactInfo/ConactInfo';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Caption subtitle={'Contact'}
                         title={'Get in Touch'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                />
                <div className={styles.contactsContent}>
                    <div className={styles.title}>
                        <h3>Say Something</h3>
                    </div>
                    <div className={styles.allContent}>
                        <div className={styles.leftContent}>
                            <div className={styles.form}>
                                <form action=''>
                                    <input type='text'/>
                                    <input type='text'/>
                                    <textarea></textarea>
                                </form>
                                <input type='submit'
                                       value='send message'
                                       className={stylesBtn.btn}
                                />
                            </div>
                        </div>
                        <div className={styles.rightContent}>
                            <ContactInfo title={'Location'}
                                         description={'231300, Lida, Belarus.'}/>
                            <ContactInfo title={'Phone number'}
                                         description={'8(029) 7618499'}/>
                            <ContactInfo title={'Email Address'}
                                         description={'Dm.sokolov1994@gmail.com'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
