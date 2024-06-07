import React, { useState } from 'react';
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MobilePopNav from '../MobilePopNav/MobilePopNav';

function NavBar({ onClick, updatePortal, updateFilter, cart }) {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <div className={styles.navBar}>
            <FontAwesomeIcon icon={faBars} onClick={togglePopup} />
            <svg width="2.5vw" height="1vh" viewBox="0 0 235 83" role="img" onClick={() => updatePortal('Home')}>
                <title>COS Home</title>
                <path d="M184.288 62.013l-7.942 9.248C183.696 79.323 194.129 83 205.036 83c15.414 0 29.404-9.606 29.404-24.187 0-27.271-44.343-20.274-44.343-36.992 0-6.759 6.641-9.959 15.057-9.959 6.998 0 13.875 3.2 18.617 6.877l6.282-9.724c-7.112-5.808-16.005-9.01-25.134-9.01-13.28 0-26.915 7.824-26.915 22.051 0 27.272 44.343 20.395 44.343 36.757 0 8.534-8.655 12.329-17.311 12.329-7.824 0-16.123-4.504-20.748-9.129M123.666 71.142c16.124 0 29.285-13.753 29.285-29.64 0-16.006-13.161-29.642-29.285-29.642-16.123 0-29.523 13.636-29.523 29.642 0 15.887 13.4 29.64 29.523 29.64M123.549.005c23 0 41.496 18.614 41.496 41.497 0 22.882-18.496 41.498-41.496 41.498-22.883 0-41.5-18.616-41.5-41.498 0-22.883 18.617-41.497 41.5-41.497M72.916 13.877C65.327 5.221 54.184.005 41.496.005 18.496.005 0 18.381 0 41.502c0 23.12 18.496 41.496 41.496 41.496 12.924 0 24.187-5.452 31.776-14.228l-9.129-7.824c-5.337 6.284-13.397 10.196-22.647 10.196-16.005 0-29.403-13.634-29.403-29.64S25.491 11.86 41.496 11.86c9.25 0 17.074 4.032 22.647 10.316l8.773-8.299" fill="#1B1B1B" />
            </svg>
            <div className={styles.cart}>
                <FontAwesomeIcon icon={faCartShopping} onClick={() => updatePortal('Cart')} />
                <p className={styles.counter}>{cart.length}</p>
            </div>
            {isPopupVisible && <MobilePopNav updatePortal={updatePortal} updateFilter={updateFilter} onClick={togglePopup} />}

        </div>
    )
}

export default NavBar;