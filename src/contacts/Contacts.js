import React from "react";
import styles from "./Contacts.module.scss";
import stylesBtn from "../common/styles/btn.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Caption} from "../caption/Caption";
import {ContactInfo} from "./ContactInfo/ConactInfo";
import Fade from "react-reveal/Fade";

export const Contacts = () => {

    const onSubmit = (e) => {
        console.log();
    }

    return (
        <div id="contacts" className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Caption subtitle={"Contact"}
                         title={"Get in Touch"}
                         description={"I'm interested ambitious or large projects. And if you have any questions, don't hesitate to use the form."}
                />
                <Fade left>
                    <div className={styles.contactsContent}>
                        <div className={styles.title}>
                            <h3>Say Something</h3>
                        </div>
                        <div className={styles.allContent}>
                            <div className={styles.leftContent}>
                                <div className={styles.form}>
                                    <form action="">
                                        <input type="text" value="name"/>
                                        <input type="email" value="e-mail"/>
                                        <textarea value="Message"></textarea>
                                        <button type="submit" className={`${stylesBtn.btn} ${styles.btn}`} onClick={onSubmit}>
                                            send message
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className={styles.rightContent}>
                                <ContactInfo title={"Location"}
                                             description={"231300, Lida, Belarus."}/>
                                <ContactInfo title={"Phone number"}
                                             description={"8(029) 7618499"}/>
                                <ContactInfo title={"Email Address"}
                                             description={"Dm.sokolov1994@gmail.com"}/>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};
