'use client'
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef(null);
  const [isSubmitted, setSubmitted] = useState(false);

  const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(email);
  };

  const sendEmail = (event) => {
    event.preventDefault();

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      const emailInput = form.current.querySelector('input[name="user_email"]');
      const userEmail = emailInput.value;

      if (!isEmailValid(userEmail)) {
        alert("Please enter a valid email address.");
        return;
      }

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            // Reset the form and set the submitted state to true
            form.current.reset();
            setSubmitted(true);
          },
          (error) => {
            alert(error.text);
            console.log("failed");
          }
        );
    }
  };

  return (
    <div className="contact-form">
      {isSubmitted ? (
        <div className="submission-message">
          Thank you for your message! We will get back to you as soon as we can.
        </div>
      ) : (
        <div>
          <h2>Send us a message for more info!</h2>
          <p>Get in touch for a healthier you.</p>
          <form ref={form} className="inner-form" onSubmit={sendEmail}>
            <input
              className="fullName"
              type="text"
              placeholder="Full name*"
              name="user_name"
              required
            />
            <input
              className="email"
              type="text"
              placeholder="Email*"
              name="user_email"
              required
            />
            <input
              className="subject"
              type="text"
              placeholder="Subject*"
              name="subject"
              required
            />
            <textarea
              className="message"
              type="text"
              placeholder="Message*"
              name="message"
              required
            />
            <input className="submit" type="submit" value="Send" />
          </form>
        </div>
      )}
    </div>
  );
}
