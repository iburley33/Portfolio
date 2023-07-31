import React from 'react';

export default function Contact() {
  return (
    <div class='contactPage'>
      <div class='contactInfo'>
        <h1>Contact Me</h1>
        <h3>E-mail: iburley33@gmail.com</h3>
        <h3>Phone: 443-545-4044</h3>
        <p>The best way to reach out is by email or text. You can always check out my linkedIn and GitHub below.</p>
      </div>
      <div class='div1'>

        <h1>Or send a message here!</h1>
        <section class="contactSect">
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
      </div>
    </div>
  );
}
