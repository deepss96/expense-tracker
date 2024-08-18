import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert('Failed to submit the form');
    }
  };

  return (
    <>
      <div className="text-white font-poppins bg-black w-108 h-108 pt-6 rounded-lg">
        <div className="p-8 rounded-lg">
          <h2 className="text-white text-2xl mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-black mb-6 w-40 border-b-2 border-gray-500 text-white p-2 mb-2 rounded"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-black w-40 mb-6 ml-6 border-b-2 border-gray-500 text-white p-2 mb-2 rounded"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="bg-black w-40 mb-6 border-b-2 border-gray-500 text-white p-2 mb-2 rounded"
              onChange={handleChange}
              value={formData.phone}
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="bg-black w-full mb-6 border-b-2 border-gray-500 text-white p-2 mb-2 rounded"
              onChange={handleChange}
              value={formData.message}
            />
            <button
              type="submit"
              className="bg-purple-600 mt-6  w-full text-white p-2 rounded hover:bg-purple-700"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
