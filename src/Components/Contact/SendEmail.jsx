import React from 'react';
import styles from './Contact.module.css'
import { useForm, ValidationError } from "@formspree/react";
const SendEmail = () => {
 const [state, handleSubmit] = useForm("xdobbzyg");

    return (
      <>
        <div className="">
          {state.succeeded ? (
            <h4 className="text-white pt-5 px-3">
              {" "}
              Thank you for messaging us. We will try to replay as soon as
              possible!
            </h4>
          ) : (
            <div className={styles.form_wrapper}>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                  <h5 className="text-white">Email Address :</h5>
                </label>{" "}
                <br />
                <input id="email" type="email" name="email" className="w-100" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />{" "}
                <br /> <br />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here"
                  className="w-100"
                  style={{ height: "40vh" }}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />{" "}
                <br />
                <button
                  type="submit"
                  className={`${styles.submit_btn} mt-3`}
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </>
    );
};

export default SendEmail;