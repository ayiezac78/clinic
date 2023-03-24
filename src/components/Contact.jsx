import React from 'react';
import { useState } from 'react';
import {HiOutlineMapPin} from 'react-icons/hi2'
import {IoMailOutline, IoPhonePortraitOutline} from 'react-icons/io5'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[93px] font-sora text-green-700">
      <div className="flex flex-col justify-center items-center bg-gray-100 p-4 md:p-8">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold inline-block">Send us your concerns, comments and suggestions</h2>
        </div>
        <div className="text-left">
          <p className="text-gray-500 mb-2">
            <HiOutlineMapPin className="w-5 h-5 inline-block mr-2"/>
            Davao City, Philippines
          </p>
          <p className="text-gray-500 mb-2">
            <IoMailOutline className="w-5 h-5 inline-block mr-2"/>
            clinic@gmail.com
          </p>
          <p className="text-gray-500">
            <IoPhonePortraitOutline className="w-5 h-5 inline-block mr-2"/>
            (403) 12345
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white p-4 md:p-8">
        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="message"
              rows="6"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="
      mb-4">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send
      </button>
    </div>
  </form>
</div>
</div>
);
};

export default Contact;