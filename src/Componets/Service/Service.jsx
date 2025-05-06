import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";




const Service = () => {
    const data = [
        { name: 'Free Shipping',icons:<FaShippingFast  size={30}/> },
        { name: 'Authentic Product',icons:<FaProductHunt size={30}/>  },
        { name: 'Easy Return',icons:<TbTruckReturn size={30}/> },
        { name: 'Secure Payment',icons:<GrSecure size={30}/> },
    ];

    return (
        <div className="container mx-auto px-5 flex py-11 gap-10 items-center justify-center flex-wrap ">
                {data.map((item, index) => (
            <div className="bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transform duration-500 ">
              <p key={index}>{item.name}</p>
                <p>{item.icons}</p>
                    </div>
                ))}
      
        </div>
    );
};

export default Service;
