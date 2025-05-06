import React, { useState } from 'react';
import { db } from '../../firebaseauth/Firebaseauth';
import { collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import xshop from '../../assets/xshop.png';

const About = () => {
  const [userfeedback, setuserfeedback] = useState({
    feedback: '',
  });

  const handlechange = (e) => {
    setuserfeedback({ ...userfeedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { feedback } = userfeedback;

    if (!feedback.trim()) {
      return toast.error('Feedback is required');
    }

    try {
      await addDoc(collection(db, 'contact'), {
        feedback: feedback.trim(),
        createdAt: new Date()
      });

      toast.success('Message sent successfully!');
      setuserfeedback({ feedback: '' }); // ✅ Reset input properly
    } catch (err) {
      toast.error('Error sending message: ' + err.message);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium underline text-red-500">
            X <span className="text-black underline">Shop</span>
          </h1>
          <p className="mb-8 font-extrabold leading-relaxed">
            X shop is a leading online shopping platform that offers a wide range of products...
          </p>

          <div className="flex w-full md:justify-start justify-center items-end">
            <form onSubmit={handleSubmit} className="flex w-full flex-col sm:flex-row items-center gap-4">
              <input
                autoComplete="off"
                type="text"
                id="feedback"
                name="feedback"
                value={userfeedback.feedback}
                onChange={handlechange}
                placeholder="Enter your feedback"
                className="flex-grow bg-gray-100 rounded border border-gray-300 py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600"
              >
                Send
              </button>
            </form>
          </div>

          {/* Play Store & App Store buttons omitted for brevity */}

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={xshop}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
