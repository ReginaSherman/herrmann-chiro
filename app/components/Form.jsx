"use client";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Send us a message for more info!</h2>
      <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <input
        className="fullName"
        {...register("fullName", { required: true })}
        placeholder="Full name*"
      />
      <input
        className="email"
        {...register("email", { required: true })}
        placeholder="Email*"
      />
      <input
        className="subject"
        {...register("subject", { required: true })}
        placeholder="Subject*"
      />
      <input
        className="message"
        {...register("message", { required: true })}
        placeholder="Message*"
      />
      <input type="submit" />
    </form>
  );
}
