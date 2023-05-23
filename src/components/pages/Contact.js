import React from 'react';

export default function Contact() {
  return (
    <section class="contactSect">
      <h1>Contact Me</h1>
      <form class="contact">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Message:
          <textarea />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}
