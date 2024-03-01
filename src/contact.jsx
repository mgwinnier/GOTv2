import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  // Update form data state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert('Please verify you are not a robot.');
      return;
    }

    // Construct the data object to send, including the reCAPTCHA token
    const dataToSend = {
      ...formData,
      recaptcha: recaptchaToken,
    };

    try {
      // Replace '/your-lambda-endpoint' with your actual Lambda function's endpoint
      const response = await axios.post('https://kez9uy6df0.execute-api.us-east-2.amazonaws.com/default/EmailCaptchaGOT', dataToSend);
      console.log('Email sent successfully!', response.data);
      alert('Message sent successfully!');
      // Optionally reset form and CAPTCHA
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setRecaptchaToken('');
    } catch (error) {
      console.error('Failed to send email', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>We're here to help and answer any question you might have. We look forward to hearing from you.</p>
      <div className="contact-form card">
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            id="message"
            rows="6"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <ReCAPTCHA
            sitekey="6LcRsoYpAAAAAF6TvLkS6VI4di0Mh4KgemVKdeS6" // Replace with your actual site key
            onChange={token => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken('')}
          />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
