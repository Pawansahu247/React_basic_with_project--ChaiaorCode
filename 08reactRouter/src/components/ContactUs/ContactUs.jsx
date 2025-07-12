import React from 'react'

export default function ContactUs() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-700 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree link
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p><strong>Email:</strong> sahupawanprasad@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Pawansahu247" className="text-blue-600" target="_blank">Pawansahu247</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pawan-prasad-sahu-603026294/" className="text-blue-600" target="_blank">Pawan-prasad-sahu</a></p>
        </div>
      </div>
    </div>
  );
}
