import React, { useState } from 'react';
import { db } from '../../firebaseauth/Firebaseauth';
import { collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast'


const ContactForm = () => {
  const [usercontect, setUserContect] = useState({
    username: '',
    email: '',
    msg: ''
  });

  const handlechange = (e) => {
    setUserContect({ ...usercontect, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, msg } = usercontect;

    if (!username || !email || !msg) {
      return toast.error('All fields are required');
    }

    try {
      await addDoc(collection(db, 'contact'), {
        username,
        email,
        msg,
        createdAt: new Date()
      });
      toast.success('Message sent successfully!');
      setUserContect({ username: '', email: '', msg: '' });
    } catch (err) {
      toast.error('Error sending message: ' + err.message);
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We’d love to hear from you! Please fill out the form below and we’ll get in touch soon.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <label htmlFor="username" className="leading-7 text-sm text-gray-600">Name</label>
              <input
                autoComplete="off"
                type="text"
                id="username"
                name="username"
                value={usercontect.username}
                onChange={handlechange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            <div className="p-2 w-1/2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                value={usercontect.email}
                onChange={handlechange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
              />
            </div>
            <div className="p-2 w-full">
              <label htmlFor="msg" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                autoComplete="off"
                id="msg"
                name="msg"
                value={usercontect.msg}
                onChange={handlechange}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
