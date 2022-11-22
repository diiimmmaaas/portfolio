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
                                            name: "",
                                            email: "",
                                            text: ""
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

                                                axios.post( "https://gmail-smtp-nodejs-server-v1.herokuapp.com/sendMessage", values )
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
                                                    placeholder={'Enter your name'}
                                                />
                                                {errors.name && touched.name && <div className={styles.error} style={{color: "white"}}>{errors.name}</div>}
                                                <input
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                    placeholder={'Enter your email'}
                                                />
                                                {errors.email && touched.email && <div className={styles.error} style={{color: "white"}}>{errors.email}</div>}
                                                <textarea name="text"
                                                          placeholder={'Enter your' +
                                                              ' message'}
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
                                </div>
                            </div>
                            <div className={styles.rightContent}>
                                <ContactInfo title={"Location"}
                                             description={"220004, Minsk, Belarus."}/>
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
