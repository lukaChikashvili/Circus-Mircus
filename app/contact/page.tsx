import React from 'react';

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-800 to-black text-white py-16 px-8 top-0 absolute main ">
      <h1 className="text-6xl mb-12 title mt-16">Contact Us</h1>
      <div className="w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="p-3 rounded bg-gray-700 text-white outline-none"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="p-3 rounded bg-gray-700 text-white outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xl mb-2">Message</label>
            <textarea
              id="message"
              className="p-3 rounded bg-gray-700 text-white h-32 outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 bg-yellow-500 rounded text-black font-bold hover:bg-yellow-600 duration-300 outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-12 w-full max-w-4xl text-center">
        <h2 className="text-4xl mb-4">Get in Touch</h2>
        <p className="text-xl mb-2">Email: info@circusmircus.com</p>
        <p className="text-xl mb-2">Phone: +123 456 7890</p>
        <p className="text-xl">Address: 123 Circus Lane, Fun Town, CA</p>
      </div>
    </div>
  );
};

export default Contact;
