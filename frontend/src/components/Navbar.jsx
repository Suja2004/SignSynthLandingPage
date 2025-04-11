import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/SignSynthLogo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (e) => {
        if (isMenuOpen && !e.target.closest('.navbar-links') && !e.target.closest('.hamburger')) {
            setIsMenuOpen(false);
        }
    };

    const handleClick = () =>{
        setActiveSection('home');
    }

    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);


    return (
        <div className="navbar">
            <a className="logo" href='#home' onClick={handleClick}>
                <img src={logo} alt="SignSynth Logo" />
                <h2>SignSynth</h2>
            </a>

            <div className="menu" onClick={toggleMenu}>
                {!isMenuOpen ?
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> :
                    <div className="hamburger close">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>}
            </div>

            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                {['home', 'product', 'demo', 'team'].map((id) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className={activeSection === id ? 'active' : ''}
                            onClick={() => setActiveSection(id)}
                        >
                            {id.toUpperCase()}
                        </a>
                    </li>
                ))}
            </nav>
        </div>
    );
}

export default Navbar;
