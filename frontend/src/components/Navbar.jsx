import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/SignSynthLogo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (e) => {
        if (isMenuOpen && !e.target.closest('.navbar-links') && !e.target.closest('.hamburger')) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isMenuOpen]);

    // Scroll spy effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'product', 'demo', 'team'];
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="SignSynth Logo" />
                <h2>SignSynth</h2>
            </div>

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
