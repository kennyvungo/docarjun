import React from 'react'
import Link from 'next/link'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex flex-row fixed w-screen h-1/5  justify-center">
      <div className="w-2/3 flex flex-row items-center ">
        <div className="text-2xl w-1/3 font-semibold">
          <Link href="/">Arjun Patel</Link>
        </div>
        <span className="w-1/3"></span>
        <div className="w-1/3 flex flex-row justify-end">
          <div className="w-1/2 flex flex-row justify-between items-center">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/work" className="hover:underline">
              Work
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="https://www.linkedin.com/in/arjun9/">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header