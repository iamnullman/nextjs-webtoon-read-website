import React, { useState } from 'react';

import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import AuthComponent from './Navigation/Content/Auth';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className='justify-center lg:w-[90rem] w-[30rem] overflow-y-hidden mx-auto transition-all duration-300'>
      <Header data={{setIsOpen, isOpen}}/>
    <AuthComponent isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
      <Footer />
    </div>
    </>
    );
}
