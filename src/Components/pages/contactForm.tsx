import React, { useState } from "react";

interface ContactProps {
  modalTimer: () => void
}

export default function ContactForm(props: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumb, setPhoneNumb] = useState("");
  const [message, setMessage] = useState("");
  const { modalTimer } = props;

  function resetForm() {
    setName("");
    setEmail("");
    setPhoneNumb("");
    setMessage("");
  }

  function postForm(e: React.FormEvent) {
    e.preventDefault();
    try {
      fetch("https://pure-oasis-43533.herokuapp.com/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          username: email,
          phone: phoneNumb,
          comment: message,
        }),
      }).then((resp) => {
        if (resp.status !== 200)
          console.error("There was an error in form reqest");
      });
    } catch (err) {
      console.error("there was an error with your request", err);
    }
    modalTimer();
    resetForm();
  }

  return (
    <form className="contact-form" onSubmit={postForm}>
      <label>
        What is your Name?
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        What is your Email?
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        What is your Phone Number?
        <br />
        <input
          type="tel"
          value={phoneNumb}
          onChange={(e) => setPhoneNumb(e.target.value)}
        />
      </label>
      <br />
      <label>
        What would you like to say?
        <br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <input id="submit-button" type="submit" />
    </form>
  );
}