import './Team.css';
import vijayN from '../assets/team/vijayN.jpg';
import sathwik from '../assets/team/sathwik.jpg';
import sujan from '../assets/team/sujan.jpg';
import vijayT from '../assets/team/vijayT.jpg';
import Footer from './Footer';

import link from '../assets/socials/linkedin.png';
import git from '../assets/socials/github.png';
import insta from '../assets/socials/instagram.png';
import tweet from '../assets/socials/twitter.png';

const teamMembers = [
    {
        img: vijayN,
        name: "Vijay Netakal",
        usn: "4MW22CS178",
        role: "Team Lead",
        description: "Tech enthusiast passionate about coding and development. Enjoys reading novels and following cricket during his free time.",
        socials: [
            { icon: link, alt: "LinkedIn", url: "https://www.linkedin.com/in/vijay-netekal-a603b2280" },
            { icon: insta, alt: "Instagram", url: "https://instagram.com/vijay_netekal_287" },
            { icon: tweet, alt: "Twitter", url: "https://twitter.com/Netekal1Vijay" }
        ]
    },
    {
        img: sathwik,
        name: "Sathwik",
        usn: "4MW22CS138",
        role: "Member",
        description: "Enthusiastic about competitive programming and AI. Enjoys exploring new tech trends and building side projects in Python and JavaScript.",
        socials: [
            { icon: link, alt: "LinkedIn", url: "https://linkedin.com/in/sathwik" },
            { icon: insta, alt: "Instagram", url: "https://instagram.com/sathwik" },
            { icon: tweet, alt: "Twitter", url: "https://twitter.com/sathwik" }
        ]
    },
    {
        img: sujan,
        name: "Sujan Kumar K",
        usn: "4MW22CS164",
        role: "Member",
        description: "Full-stack web developer who enjoys working on MERN projects. Loves coding, designing user interfaces, and building projects.",
        socials: [
            { icon: git, alt: "GitHub", url: "https://github.com/Suja2004" },
            { icon: link, alt: "LinkedIn", url: "https://www.linkedin.com/in/sujan-kumar-k164" },
            { icon: tweet, alt: "Twitter", url: "https://x.com/SujaK2004" }
        ]
    },
    {
        img: vijayT,
        name: "Vijay Telang",
        usn: "4MW22CS179",
        role: "Member",
        description: "Cybersecurity enthusiast and system-level programmer. Interested in ethical hacking, CTFs, and exploring Linux internals.",
        socials: [
            { icon: link, alt: "LinkedIn", url: "https://linkedin.com/in/vijay-telang" },
            { icon: insta, alt: "Instagram", url: "https://instagram.com/vijay_telang" },
            { icon: tweet, alt: "Twitter", url: "https://twitter.com/vijay_telang" }
        ]
    }
];


function Team() {
    return (
        <>
            <div id='team' className='team section'>
                <h1>Meet The Team</h1>
                <div className="slider" style={{ "--quantity": teamMembers.length }}>
                    {teamMembers.map((member, index) => (
                        <div className="item" style={{ "--position": index + 1 }} key={member.usn}>
                            <div className="content">
                                <img src={member.img} alt={member.name} />
                                <h3>{member.name}</h3>
                                <h4>{member.usn}</h4>
                                <p>{member.role}</p>
                                <div className="info">
                                    <p>{member.description}  </p>
                                    <div className="socials">
                                        {member.socials.map((social, i) => (
                                            <a href={social.url} key={i} target="_blank" rel="noopener noreferrer">
                                                <img src={social.icon} alt={social.alt} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Team;
