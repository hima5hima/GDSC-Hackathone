import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export default function ContactUs() {
  const icons = [
    {
      title: "example200@gmail.com",
      icon: <MdEmail className="text-2xl text-main" />,
    },
    {
      title: "0128280666666666666",
      icon: <FaPhone className="text-2xl text-main" />,
    },
  ];
  const formInfomation = [
    { lable: "Name", placeHolder: "Enter your name", type: "text" },
    { lable: "Phone Number", placeHolder: "Phone Number", type: "text" },
    { lable: "Email", placeHolder: "Enter your Email", type: "email" },
    // { lable:"Message",  placeHolder:'Your Message...',type:'text'},
  ];
  return (
    <>
      <div className="container mx-auto px-4 relative  justify-center  items-center mt-10  flex flex-col  ">
        <h2 className="text-2xl font-semibold">
          We'd love to <span className="text-main">hear you</span>
        </h2>
        <h2 className="text-center mt-4 text-textShade">
          If you have specific questions or would like to request more
          information about Solution Challenge Al-Azhar university please
          complete the contact form below. Please provide the following details
          to help us better understand your needs.
        </h2>
        <div className="grid lg:grid-cols-2 sm:lg:grid-cols-1 w-4/5 gap-4 mt-10  ">
          {icons.map((icon, i) => (
            <div
              key={i}
              className=" border border-main h-14 rounded-md flex justify-center  items-center flex-row gap-4"
            >
              {icon.icon}
              <h5 className=" text-textShade">{icon.title}</h5>
            </div>
          ))}
        </div>
        <form action="" className=" w-full rounded-md relative  ">
          <div className="  pt-20 border  border-gray-300 mt-20 mb-10    rounded-md p-5 flex flex-col   ">
            <div
              className="absolute rounded-full flex justify-center items-center  h-20 w-20 border-2 border-t-main  border-r-main bg-white border-b-white border-l-white mx-auto "
              style={{
                rotate: "-45deg",
                top: "04.84%",
                left: "52% ",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="p-3  rounded-full "
                style={{
                  rotate: "45deg",
                  background: " rgba(25, 118, 210, 0.3)",
                }}
              >
                <img src="/imgs/Icon.png" alt="" />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-center ">
              Contact <span className="text-main">Us</span>
            </h2>
            <h2 className="text-center mt-1 text-textShade">
              Any question or remarks? Just write us a message
            </h2>
            <div>
              {formInfomation.map((item, i) => (
                <div key={i} className="flex flex-col gap-2 mt-3">
                  <label>{item.lable}</label>
                  <input
                    type={item.type}
                    placeholder={item.placeHolder}
                    className="px-4  py-2 rounded-lg placeholder:text-textShade border border-gray-300  outline-none transition-all duration-75 ease-out focus:border-main focus:ring-transparent"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-3 h-30 mb-4">
              <label>Message</label>
              <textarea
                cols="0"
                rows="7"
                type="text"
                placeholder="Your Message..."
                className=" rounded-lg placeholder:text-textShade border border-gray-300  outline-none transition-all duration-75 ease-out focus:border-main focus:ring-transparent "
              />
            </div>

            <button className=" self-center bg-main text-white py-4 hover:bg-blue-700 w-2/4  rounded-md transition-all duration-500 ease-out ">
              Send message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
