// Header.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './index.css';
import { RootState } from '../../data/store';
import { useSelector } from 'react-redux';
import Modal from '../Modal';

export default function Header() {
  const { coursesData } = useSelector((state: RootState) => state.courses);
  const addedElements = coursesData?.filter((course) => course.isAdded === true).length;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
      <div className='cart' onClick={openModal}>
        <FontAwesomeIcon icon={faCartShopping} />
        <div id="added-items">{addedElements}</div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal} courses={coursesData}>
          <h1>Hello from popup</h1>
        </Modal>
      )}
    </header>
  );
}
