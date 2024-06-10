import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="contact-form">
          <div>
            <label htmlFor="email" className="contact-label">Your email</label>
            <input
              type="email"
              id="email"
              className="contact-input"
              placeholder="name@flowbite.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="contact-label">Subject</label>
            <input
              type="text"
              id="subject"
              className="contact-input"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="contact-label">Your message</label>
            <textarea
              id="message"
              rows="6"
              className="contact-textarea"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button type="submit" className="contact-button">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
