import React from 'react';
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";




const Footer = () => {
    return (
        <footer className="bg-black text-white ">
            <div className="container px-5 py-15 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 md:mx-auto text-center md:text-left">
                    <h3 className="font-bold text-2xl">
                        X <span className="text-red-700">Shop</span>
                    </h3>
                </div>

                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md-text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                            MENU
                        </h2>
                        <ul className="list-none mb-10">
                            <li>Features</li>
                            <li className="mt-1">Info Center</li>
                            <li className="mt-1">News Blog</li>
                            <li className="mt-1">Login</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                            Company
                        </h2>
                        <ul className="list-none mb-10">
                            <li className="mt-1">About Us</li>
                            <li className="mt-1">Privacy Policy</li>
                            <li className="mt-1">Terms & Conditions</li>
                            <li className="mt-1">Login</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                            Contact
                        </h2>
                        <ul className="list-none mb-10">
                            <li className="mt-1">Contact Sales</li>
                            <li className="mt-1">+242412421412</li>
                            <li className="mt-1">News Blog</li>
                            <li className="mt-1">+32532523523</li>
                        </ul>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium tracking-widest text-lg mb-3">
                            Support
                        </h2>
                        <ul className="list-none mb-10">
                            <li className="mt-1">Contact Support</li>
                            <li className="mt-1">Info Center</li>
                            <li className="mt-1">Activate</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-500 text-white">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-sm text-center sm:text-left">
                        © X Shop 2025
                    </p>
                    <p className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                      <span className="mr-2"><LuInstagram/></span>
                      <span className="mr-2"><FaWhatsapp/></span>
                      <span className="mr-2"><FaFacebook/></span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
