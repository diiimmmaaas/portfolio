import React from "react";
import styles from "./Contacts.module.scss";
import stylesBtn from "../common/styles/btn.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import {Caption} from "../caption/Caption";
import {ContactInfo} from "./ContactInfo/ConactInfo";
import Fade from "react-reveal/Fade";
import {Formik} from "formik";
import axios from "axios";

export const Contacts = () => {

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
                                    <Formik
                                        initialValues={{
                                            name: "Enter your name",
                                            email: "Enter your email",
                                            text: "Enter your message"
                                        }}
                                        validate={values => {
                                            const errors = {};
                                            if (!values.email) {
                                                errors.email = "Required";
                                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                                errors.email = 'Invalid email address';
                                            }

                                            if (!values.name) {
                                                errors.name = "Required";
                                            }

                                            if (!values.text) {
                                                errors.text = "Required";
                                            } else if (values.text.length < 5) {
                                                errors.text = "Message must be at least 5 characters";
                                            }
                                            return errors;
                                        }}
                                        onSubmit={(values, {setSubmitting}) => {
                                            setTimeout(() => {

                                                axios.post( "http://localhost:3010/sendMessage", values )
                                                    .then( () => {
                                                        alert("Your message has been send")
                                                    } )
                                            }, 400);
                                        }}
                                    >
                                        {({
                                              values,
                                              errors,
                                              touched,
                                              handleChange,
                                              handleBlur,
                                              handleSubmit,
                                              isSubmitting,
                                              /* and other goodies */
                                          }) => (
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                />
                                                {errors.name && touched.name && <div className={styles.error} style={{color: "white"}}>{errors.name}</div>}
                                                <input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                                {errors.email && touched.email && <div className={styles.error} style={{color: "white"}}>{errors.email}</div>}
                                                <textarea name="text"
                                                          onChange={handleChange}
                                                          onBlur={handleBlur}
                                                          value={values.text}></textarea>
                                                {errors.text && touched.text && <div className={styles.errorTextarea} style={{color: "white"}}>{errors.text}</div>}
                                                <button type="submit" disabled={isSubmitting}
                                                        className={`${stylesBtn.btn} ${styles.btn}`}>
                                                    Submit
                                                </button>
                                            </form>
                                        )}
                                    </Formik>

                                    {/*<form action="">*/}
                                    {/*    <input type="text" value="name"/>*/}
                                    {/*    <input type="email" value="e-mail"/>*/}
                                    {/*    <textarea value="Message"></textarea>*/}
                                    {/*    <button type="submit" className={`${stylesBtn.btn} ${styles.btn}`} onClick={onSubmit}>*/}
                                    {/*        send message*/}
                                    {/*    </button>*/}
                                    {/*</form>*/}
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
