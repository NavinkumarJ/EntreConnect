import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="mt-20 max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={assets.contact}
            alt="Contact"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Contact Us</h1>
          <p className="text-gray-700 mb-4 text-center md:text-left">
            Have questions or suggestions? Get in touch with us!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              rows="4"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
