import './Nav.css';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { GoArrowRight } from 'react-icons/go';
import { useState, useEffect } from 'react';

function Nav({page}) {
  const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state

  useEffect(() => {
    const handleScroll = () => {
      setBgColor(window.scrollY > 50 ? '#dcd0ff' : '#ffffff');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className={page === "home" ? "home-nav sticky-top" : "about-nav sticky-top" } style={{ backgroundColor: bgColor }}>
      <div className={page === "home"? "d-none":"about-logo d-none d-lg-block"}>
        <img src="/public/plane.webp" alt="" />
      </div>
      <div className="nav-logo">
        <img src="/public/logo.svg" alt="Extech logo" className='logo' />
      </div>
      <div className='d-flex align-items-center'>
      <ul className="nav-list d-none d-lg-flex">
        <li className='nav-link'><Link to="/">Home <FiChevronDown /></Link></li>
        <li className='nav-link'><Link to="/about">About</Link></li>
        <li className='nav-link'><a href="#services">Services <FiChevronDown /></a></li>
        <li className='nav-link'><a href="#blogs">Blogs <FiChevronDown /></a></li>
        <li className='nav-link'><a href="#pages">Pages <FiChevronDown /></a></li>
        <li className='nav-link'><Link to="/contact">Contact</Link></li>
      </ul>
        <ul className="side-nav" style={{ display: sidebarOpen ? 'block' : 'none' }} >
        <IoClose onClick={toggleSidebar} className ="side-nav-icon" />
          <li className='nav-link'><Link to="/">Home <FiChevronDown /></Link></li>
          <li className='nav-link'><Link to="/about">About</Link></li>
          <li className='nav-link'><a href="#services">Services <FiChevronDown /></a></li>
          <li className='nav-link'><a href="#blogs">Blogs <FiChevronDown /></a></li>
          <li className='nav-link'><a href="#pages">Pages <FiChevronDown /></a></li>
          <li className='nav-link'><Link to="/contact">Contact</Link></li>
        </ul>
      <div className='p-1 d-flex align-items-center'>
      <IoMdSearch aria-label="Search" className ="nav-icon m-2" />
      <FaCartShopping aria-label="Cart" className ={page === "home" ? "nav-icon m-2": "d-none"} />
      </div>
      <IoMenu onClick={toggleSidebar} aria-label="Menu" className='nav-icon d-block d-lg-none' />
      </div>
      <div className={page ==="home" ? 'd-flex justify-content-center align-items-center': 'about-btn d-none d-lg-flex'}>
      <button className='d-none d-lg-block btn btn-home'>
        GET A QUOTE <GoArrowRight />
      </button>
      </div>
    </nav>
  );
}

export default Nav;
