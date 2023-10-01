"use client";
import { useRef } from "react"; // Import useState
import emailjs from "@emailjs/browser";

export default function App() {
  const form = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form">
      <h2>Send us a message for more info!</h2>
      <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
        <input
          className="message"
          type="text"
          placeholder="Message*"
          name="message"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
