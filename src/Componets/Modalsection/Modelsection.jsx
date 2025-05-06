import React, { useState } from 'react';
import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput
} from "flowbite-react";
import { toast } from 'react-hot-toast';

const Modelsection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderdetails, setOrderDetails] = useState({
    fullname: "",
    address: "",
    pincode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderdetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, address, pincode, mobile } = orderdetails;

    if (!fullname || !address || !pincode || !mobile) {
      return toast.error("All fields are required");
    }

    const pincodeRegex = /^[0-9]{6}$/;
    const mobileRegex = /^[6-9][0-9]{9}$/;

    if (!pincodeRegex.test(pincode)) {
      return toast.error("Invalid pincode (must be 6 digits)");
    }

    if (!mobileRegex.test(mobile)) {
      return toast.error("Invalid mobile number (must be 10 digits and start with 6-9)");
    }

    // If all validations pass
    toast.success("Order placed successfully");
    onCloseModal();
  };

  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails({
      fullname: "",
      address: "",
      pincode: "",
      mobile: "",
    });
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <ModalHeader />
        <ModalBody>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Order Form</h3>

            <div>
              <Label htmlFor="fullname">Your Name</Label>
              <TextInput
                id="fullname"
                name="fullname"
                placeholder="Enter your name"
                value={orderdetails.fullname}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="address">Your Address</Label>
              <TextInput
                id="address"
                name="address"
                placeholder="Enter your address"
                value={orderdetails.address}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="pincode">Your Pincode</Label>
              <TextInput
                id="pincode"
                name="pincode"
                type="number"
                placeholder="Enter your pincode"
                value={orderdetails.pincode}
                onChange={handleChange}
                required
                autoComplete="off"
                inputMode="numeric"
                maxLength={6}
              />
            </div>

            <div>
              <Label htmlFor="mobile">Your Mobile</Label>
              <TextInput
                id="mobile"
                name="mobile"
                type="number"
                placeholder="Enter your number"
                value={orderdetails.mobile}
                onChange={handleChange}
                required
                autoComplete="off"
                inputMode="numeric"
                maxLength={10}
              />
            </div>

            <div className="w-full">
              <Button onClick={handleSubmit} className="w-full">Order Now</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Modelsection;
