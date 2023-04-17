import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                
                <p id="san" className='header-text fs-18 fw-3'>"The more that you read, the more things you will know. The more that you learn,<span className='SSS'>the more places you'll go." - Dr. Seuss,</span></p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header