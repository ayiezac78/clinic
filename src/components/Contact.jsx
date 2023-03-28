import React from 'react';
import { useRef } from 'react';
import {HiOutlineMapPin} from 'react-icons/hi2'
import {IoMailOutline, IoPhonePortraitOutline} from 'react-icons/io5'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pdq9tkf', 'template_nvxw62m', form.current, 'bKcqy7RF97RNVRq5J')
      .then((result) => {
          console.log(result.text);
          toast.success("Message Sent")
      }).catch((error) => {
          console.log(error.text);
          toast.error("Failed to send message, please try again");
      });

      e.target.reset();
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
            contactusclinic@gmail.com
          </p>
          <p className="text-gray-500">
            <IoPhonePortraitOutline className="w-5 h-5 inline-block mr-2"/>
            (403) 12345
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white p-4 md:p-8">
        <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              name='user_name'
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email address"
              name='user_email'
            />
          </div>
          <div className="mb-4">
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="message"
              rows="6"
              placeholder="Your message"
              name='message'
            ></textarea>
          </div>
          <div className="mb-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Contact;