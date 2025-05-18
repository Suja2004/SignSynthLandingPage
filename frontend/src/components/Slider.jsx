import react from "../assets/icons/atom.png";
import css from "../assets/icons/css-3.png";
import python from "../assets/icons/python.png";
import panda3d from "../assets/icons/panda3d.png";
import vosk from "../assets/icons/vosk.png";
import blender from "../assets/icons/blender.png";

import './Slider.css';

const techStack = [
    { img: react, alt: "React", name: "React" },
    { img: css, alt: "CSS3", name: "CSS3" },
    { img: python, alt: "Python", name: "Python" },
    { img: panda3d, alt: "Panda3D", name: "Panda3D" },
    { img: vosk, alt: "Vosk", name: "Vosk" },
    { img: blender, alt: "Blender", name: "Blender" }
];

const Slider = () => {
    return (
        <section id="slider" className="techslider">
            <div className="techs-container">
                <h1>Tech Stack</h1>
                <div
                    className="tech-container"
                    style={{ "--quantity": techStack.length, "--time": "12s" }}
                >
                    {techStack.map((tech, index) => (
                        <div className="tech-card" style={{ "--position": index + 1 }} key={index}>
                            <div className="tech-icon">
                                <img src={tech.img} alt={tech.alt} />
                                <p>{tech.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Slider;
