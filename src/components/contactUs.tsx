import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    emailjs.init("4LNj0fAKokiEK_iEY");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    emailjs
      .send(
        "service_g8a3kdc", // Replace with your actual Service ID
        "service_g8a3kdc", // Yes, put the Service ID here again instead of a Template ID
        {
          to_name: "Perry", // Or whatever name you want to use
          from_name: `${name} ${surname}`,
          from_email: email,
          message: message,
          reply_to: email,
          subject: "New Contact Form Submission",
        }
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitMessage(
            "Thank you for your message. We will get back to you soon!"
          );
          setName("");
          setSurname("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitMessage(
            "Oops! Something went wrong. Please try again later."
          );
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left side - Large text */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-darkGreen mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help and answer any question you might have. We look
              forward to hearing from you!
            </p>
          </div>

          {/* Right side - Form */}
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="px-4 py-5 sm:p-6 rounded-lg"
            >
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 focus:ring-brightGreen focus:border-brightGreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="surname"
                    p-2
                    className="block text-sm font-medium text-gray-700"
                  >
                    Surname
                  </label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                    className="mt-1 focus:ring-brightGreen focus:border-brightGreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 focus:ring-brightGreen focus:border-brightGreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1 focus:ring-brightGreen focus:border-brightGreen block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 border border-black"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-darkGreen hover:bg-brightGreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brightGreen"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
              {submitMessage && (
                <div className="mt-4 text-center text-sm text-gray-600">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
