// Import necessary libraries
import React, { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './index.css';

const generateRandomLineStyles = () => {
  const randomTop = Math.random() * 100 + "%";
  const randomLeft = Math.random() * 70 + "%";
  const randomRotation = Math.random() * 190 + "deg";
  const randomLength = Math.random() * 70 + "px";
  const randomWidth = Math.random() * 1 + "px"; // Thin lines
  return {
    top: randomTop,
    left: randomLeft,
    transform: `rotate(${randomRotation})`,
    width: randomLength,
    height: randomWidth,
  };
};

const socialLinks = [
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/aznidi/", label: "LinkedIn" },
  { icon: <FaGithub />, link: "https://github.com/aznidi", label: "GitHub" },
  { icon: <FaPhoneAlt />, link: "tel:+212611385792", label: "Téléphone" },
  { icon: <FaEnvelope />, link: "mailto:salahaznidi09@gmail.com", label: "Email" },
];

const App = () => {
  const changingTextRef = useRef(null);

  return (
    <div
      id="accueil"
      className="relative isolate min-w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 px-6 lg:px-8"
    >
      {/* Background gradient and lines */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-gray-800 opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Random lines */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          style={generateRandomLineStyles()}
          className="absolute bg-yellow-500 opacity-50"
        ></div>
      ))}

      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mt-16">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 flex-[1] min-w-[300px]">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-poppins text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-yellow-500"
          >
            Mes Coordonnées
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
              >
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 text-3xl mb-2"
                >
                  {social.icon}
                </a>
                <p className="font-poppins text-yellow-300 text-lg font-semibold">
                  {social.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden lg:block lg:ml-8 flex-[1]"
        >
          <img
            src="/aznidi.jpeg"
            alt="Hero"
            className="w-96 h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 object-cover rounded-md shadow-md"
          />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-yellow-300 font-poppins text-sm">
        © Aznidi 2024. Tous droits réservés.<br> <a href="https://aznidi.news" target="_blank" rel="noopener noreferrer" className="text-yellow-500 underline">aznidi.news</a>
      </footer>
    </div>
  );
};

export default App;
