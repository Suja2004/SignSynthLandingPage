import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/SignSynthLogo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = (e) => {
        if (isMenuOpen && !e.target.closest('.navbar-links') && !e.target.closest('.hamburger')) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const target = document.querySelector(hash);
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    useEffect(() => {
        let hash = location.hash.replace('#', '') || 'home';
        if (location.pathname === '/team') hash = 'team';
        setActiveSection(hash);
    }, [location]);

    return (
        <div className="navbar">
            <a className="logo" href="/#home" onClick={() => setActiveSection('home')}>
                <img src={logo} alt="SignSynth Logo" />
                <h2>SignSynth</h2>
            </a>

            <div className="menu" onClick={toggleMenu}>
                <div className={`hamburger${isMenuOpen ? ' close' : ''}`}>
                    <span></span><span></span><span></span>
                </div>
            </div>

            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a href="/#home" className={`homelink ${activeSection === 'home' ? 'active' : ''}`}>
                        HOME
                    </a>
                </li>
                <li>
                    <a href="/#product" className={`productlink ${activeSection === 'product' ? 'active' : ''}`}>
                        PRODUCT
                    </a>
                </li>
                <li>
                    <a href="/#demo" className={`demolink ${activeSection === 'demo' ? 'active' : ''}`}>
                        DEMO
                    </a>
                </li>
                <li>
                    <NavLink
                        to="/team"
                        className={`teamlink ${activeSection === 'team' ? 'active' : ''}`}
                        onClick={() => setActiveSection('team')}
                    >
                        TEAM
                    </NavLink>
                </li>
            </nav>
        </div>
    );
}

export default Navbar;
