import React from 'react';

const ContactForm = () => {
  return (
    <section id="Contact" className="bg-black py-16 px-6 text-gray-300 scroll-smooth">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold primary-color">Get in Touch</h2>
        <p className="mt-4 text-lg">Let's collaborate and bring your social media presence to life!</p>
      </div>

      <form className="max-w-2xl mx-auto mt-10 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            id="name"
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:border-primary-color focus:ring-primary-color"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:border-primary-color focus:ring-primary-color"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:border-primary-color focus:ring-primary-color"
            placeholder="Subject"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full mt-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:border-primary-color focus:ring-primary-color"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-br from-orange-500 to-pink-500 text-white py-3 rounded-md font-semibold hover:opacity-80 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
