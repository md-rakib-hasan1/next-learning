"use client";
import React, { useActionState } from "react";
import { sendMessage } from "./actions";

const ContactPage = () => {
    const[state,formAction]=useActionState(sendMessage,{
        success:false,
        message:"",
    })
  return (
    <div>
      <h1>Contact Us</h1>

      <form action={formAction}>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
      {state.message && <p>{state.message}</p> }
    </div>
  );
};

export default ContactPage;