import React, { useEffect, useState } from 'react';
import './scrollup.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";


const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 560) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        isVisible && (
            <a 
                href="#top" 
                className={`scrollup ${isVisible ? 'show-scroll' : ''}`} 
                onClick={scrollToTop} 
                aria-label="Scroll to Top"
            >
                <HiOutlineArrowSmUp className="scrollup__icon" />
            </a>
        )
    );
};

export default ScrollUp;