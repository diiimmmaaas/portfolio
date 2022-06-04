import React from 'react';
import styles from './Contacts.module.css'
import stylesBtn from '../common/styles/btn.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Caption} from "../caption/Caption";
import {ContactInfo} from "./ContactInfo/ConactInfo";

export const Contacts = (props) => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Caption subtitle={'Contact'}
                         title={'Get in Touch'}
                         description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo orci odio, ut tor felisdapibus sed. Phasellus vitae ullamcorper purus.'}
                />
                <div className={styles.contactsContent}>
                    <div className={styles.formTitle}>
                        <h3>Say Something</h3>
                    </div>
                    <div className={styles.allContent}>
                        <div className={styles.leftContent}>
                            <div className={styles.form}>
                                <form action="">
                                    <div className={styles.inputForm}>
                                        <input type="text"/>
                                    </div>
                                    <input type="text"/>
                                    <textarea></textarea>
                                </form>
                                <input type="submit"
                                       value="send message"
                                       className={stylesBtn.btn}
                                />
                            </div>
                        </div>
                        <div className={styles.rightContent}>
                            <ContactInfo title={'Location'}
                                         description={'1234,Parkstreet Avenue, America.'}/>
                            <ContactInfo title={'Phone number'}
                                         description={'0123 456789'}/>
                            <ContactInfo title={'Email Address'}
                                         description={'Info@MarlonSimon.com'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
