import React from 'react'
import Logo from "../Logo"

function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white w-full  md:py-10 px-5">
      <div className="w-full md:w-[80%] md:mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-around gap-3 md:gap-10">
          <div className="w-full md:w-[30%]">
            <div>
              <Logo/>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                RudraaTechSolution is a startup company based in India,
                India, focused on providing innovative technological solutions
                to a wide range of clients. We are a team of passionate and
                experienced professionals driven to make a positive impact
                through the power of technology.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg">Quick Links </h4>
            <div className="flex flex-col ">
              <a
                href="http://"
                className="hover:translate-x-2 duration-200 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
              <a
                href="http://"
                className="hover:translate-x-2 duration-200 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
              <a
                href="http://"
                className="hover:translate-x-2 duration-200 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
              <a
                href="http://"
                className="hover:translate-x-2 duration-200 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
              <a
                href="http://"
                className="hover:translate-x-2 duration-200 hover:text-green-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg">Follow Us </h4>
            <div className="flex flex-col">
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                FaceBook
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Whatsapp
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                X
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="flex flex-col">
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Mail
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Address
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Website
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Whatsapp
              </a>
              <a href="http://" className="hover:translate-x-2 duration-200 hover:text-green-300" target="_blank" rel="noopener noreferrer">
                Call Us
              </a>
            </div>
          </div>
        </div>
        <div className='mt-4 border-t py-5'>
            <p className='text-center text-base'>Copyright &copy; 2024 all are reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer
