import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../assets/SignSynthLogo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveLink(id);
        }
    };

    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                scrollToSection(id);
            }, 100);
        } else if (location.pathname === '/team') {
            setActiveLink('team');
        } else {
             setActiveLink('home');
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname !== '/') return; 

            const sections = document.querySelectorAll('section');
            const scrollPosition = window.pageYOffset;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const id = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop - 150 && scrollPosition < sectionTop + sectionHeight) {
                     setActiveLink(id);
                }
            });
        }; 
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <div className="navbar">
            <a className="logo" href="/#home" onClick={() => setActiveLink('home')}>
                <img src={logo} alt="SignSynth Logo" />
                <h2>SignSynth</h2>
            </a>

            <div className="menu" onClick={toggleMenu}>
                <div className={`hamburger${isMenuOpen ? ' close' : ''}`}>
                    <span></span><span></span><span></span>
                </div>
            </div>

            <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                {['home', 'product', 'demo'].map((id, i) => (
                    <a
                        key={id}
                        href={`/#${id}`}
                        onClick={(e) => {
                            if (location.pathname === '/' || location.pathname === '') {
                                e.preventDefault();
                                scrollToSection(id);
                            } 
                            setIsMenuOpen(false);
                        }}
                        className={activeLink === id ? 'active' : ''}
                        style={{ '--delay': `${(i + 2) * 0.4}s` }}
                    >
                        {id.toUpperCase()}
                    </a>
                ))}
                
                <NavLink
                    to="/team"
                    className={`teamlink ${activeLink === 'team' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveLink('team');
                        setIsMenuOpen(false);
                    }}
                >
                    TEAM
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;