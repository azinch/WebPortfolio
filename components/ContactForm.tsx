"use client";

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () =>
{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    setIsSending(true);
    setError('');

    try
    {
      await axios.post('/api/send-email', formData);
      setFormData({ name: '', email: '', message: '' });
    } catch (error)
    {
      console.error('Failed to send email:', error);
      setError('Failed to send email');
    } finally
    {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
          rows={5}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email to reply"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button type="submit" disabled={isSending}
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-800 hover:bg-blue-600">
        {isSending ? 'Sending...' : 'Send Message'}
      </button>
      {error && <div className="text-red-400 font-medium mb-4">{error}</div>}
    </form>
  );
};

export default ContactForm;
