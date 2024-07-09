import Button from "./Button";
import { locations } from "../utils/location";
import { useState } from "react";

export default function ContactUs() {
  const [submit, setSubmit] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    name: "",
    ph: "",
    loc: "",
    mess: "",
    media: [],
  });

  const isValid = () => {
    return (
      details.email !== "" &&
      details.name !== "" &&
      details.loc !== "" &&
      details.mess !== "" &&
      details.media.length > 0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      setSubmit(!submit);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleMediaChange = (e) => {
    const file = e.target.files;
    const fileArray=Array.from(file);
    setDetails((prevDetails) => ({
      ...prevDetails,
      media: fileArray,
    }));
  };

  return (
    <div id="contactus" className="bg-teal-900 dark:bg-yellow-400 text-white dark:text-slate-950 py-16">
      {!submit ? (
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col">
            <form className="flex-1 space-y-4" onSubmit={handleSubmit}>
              {!isValid() && (
                <p className="text-red-500 text-sm font-medium">
                  * Please fill out all required fields and upload media.
                </p>
              )}
              <div>
                <label className="block mb-2">* Email address (required)</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded-md text-black"
                  value={details.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">* Name (required)</label>
                <input
                  type="text"
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Phone number</label>
                <input
                  type="tel"
                  name="ph"
                  value={details.ph}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block mb-2">* Your Location (required)</label>
                <select
                  name="loc"
                  value={details.loc}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  required
                >
                  <option value="" disabled>
                    Select your location
                  </option>
                  {locations.map((loc, ind) => {
                    return (
                      <option key={ind} value={loc.name}>
                        {loc.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block mb-2">* Message (required)</label>
                <textarea
                  name="mess"
                  value={details.mess}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md text-black"
                  placeholder="Enter your message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div>
                <label className="block mb-2">
                  * Upload Photos/Videos (required)
                </label>
                <div className="relative bg-teal-950 rounded-lg p-4">
                  <input
                    type="file"
                    accept="image/*, video/*"
                    name="media"
                    onChange={handleMediaChange}
                    required
                    multiple
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-white">
                    {details.media.length > 0
                        ? details.media.map((file, index) => (
                            <span key={index}>{file.name} </span>
                          ))
                        : "Choose File"}
                    </span>
                  </div>
                </div>
              </div>
              <Button text={"Submit"} func={handleSubmit} />
            </form>
            <div className="flex-1 h-64 lg:h-auto"></div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="lg:text-4xl sm:text-3xl md:text-4xl font-bold text-white dark:text-slate-950">
            Your form submitted successfully.
          </h1>
          <h3 className="font-medium text-gray-300 dark:text-slate-900 text-lg">
            Our team will reach out to you shortly.
          </h3>
          <p className="font-semibold text-sm text-gray-400 dark:text-slate-800">Thank you.</p>
        </div>
      )}
    </div>
  );
}
