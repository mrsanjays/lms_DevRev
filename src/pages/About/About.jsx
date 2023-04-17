import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>Info</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About LMS</h2>
            <p className='fs-17'>A simple library management webpage with the aforementioned features would allow users to easily access and browse the library's collection of books. The webpage would display a list of all the books in the library, including information such as the title, author, subject, and publish date of each book.</p>
            <p className='fs-17'>Overall, this library management webpage would provide an intuitive and user-friendly interface for users to browse and discover books in the library's collection, while also offering powerful filtering options to help users find the books they need more quickly and easily.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
