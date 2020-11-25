import React, { useState } from "react";

export default function ContactForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, phoneNumb, message);
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        What is your Name?<br/>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        What is your Email?<br/>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        What is your Phone Number?<br/>
        <input type="tel" onChange={(e) => setPhoneNumb(e.target.value)} />
      </label>
      <br />
      <label>
        What would you like to say?<br/>
        <textarea type="text" onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <input id='submit-button' type="submit" />
    </form>
  );
}
