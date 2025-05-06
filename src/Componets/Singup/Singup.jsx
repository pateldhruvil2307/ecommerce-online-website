import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidEmail,isValidPassword } from '../../Validation/Validation';
import toast from 'react-hot-toast'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseauth/Firebaseauth';
import { updateProfile } from 'firebase/auth';



const Signup = () => {


 const navigatelogin=useNavigate();

const[usersingup,setusersingup]=useState({username:"",email:"",password:""})

const handlechange=(e)=>{
  setusersingup({...usersingup,[e.target.name]:e.target.value})
  console.log(usersingup)
}


const handleSubmit=(e)=>{
 e.preventDefault();
 if(!usersingup.username || !usersingup.email||!usersingup.password){
   return toast.error("all fields are require")
 }else{
     createUserWithEmailAndPassword(auth,
     usersingup.email,
     usersingup.password)

     .then(async(res)=>{
        const user=res.user

      await  updateProfile(user,{
            displayName:usersingup.username
        })
             navigatelogin("/login");
        })
     .catch((err)=>toast.error(err.message)) 
 }
}  

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex justify-center">
          <div className="lg:w-1/2 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Sign up to Your Account
            </h2>
            <p className="text-red-500 mb-2">data</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              username
              </label>
              <input
              autoComplete="off"
                type="text"
                id="username"
                name="username"
              value={usersingup.username}
                onChange={handlechange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
              autoComplete="off"
                type="email"
                id="email"
                name="email"
                value={usersingup.email}
                onChange={handlechange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
              autoComplete="off"
                type="password"
                id="password"
                name="password"
                value={usersingup.password}
                onChange={handlechange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="text-white bg-blue-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Signup
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
