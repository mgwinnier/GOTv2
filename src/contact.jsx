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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert('Please verify you are not a robot.');
      return;
    }

    const dataToSend = {
      ...formData,
      recaptcha: recaptchaToken,
    };

    try {
      const response = await axios.post('https://kez9uy6df0.execute-api.us-east-2.amazonaws.com/default/EmailCaptchaGOT', dataToSend);
      console.log('Email sent successfully!', response.data);
      alert('Message sent successfully!');
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
    <div className="flex flex-col items-center justify-start pt-10 min-h-screen bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p>Contact us to ensure the silver linings of your golden years. We are excited to talk further about all of our services and resources.</p>
      </div>
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full max-w-md mx-4 border-2 border-yellow-500">
        <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-yellow-500"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-yellow-500"
          />
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-yellow-500"
          />
          <textarea
            id="message"
            rows="6"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="p-2 border-2 rounded-md border-yellow-500"
          />
          <ReCAPTCHA
            sitekey="6LfktoYpAAAAAF3Nl1WaITq97YA74mG0t4KzljQq"
            onChange={token => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken('')}
            className="flex justify-center my-4"
          />
          <button type="submit" className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-200">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
