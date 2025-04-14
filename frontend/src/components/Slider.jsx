import react from "../assets/icons/atom.png";
import css from "../assets/icons/css-3.png";
import python from "../assets/icons/python.png";
import tkinter from "../assets/icons/tkinter.png";
import vosk from "../assets/icons/vosk.png";
import mediapipe from "../assets/icons/mediapipe.png";

import './Slider.css';

const Slider = () => {
    return (
        <section id="slider" className="techslider">
            <div className="techs-container">
                <h1>Tech Stack</h1>
                <div
                    className="tech-container"
                    style={{ "--quantity": 6, "--time": "12s" }}
                >
                    <div className="tech-card" style={{ "--position": 1 }}>
                        <div className="tech-icon">
                            <img src={react} alt="react" title="REACT" />
                        </div>
                    </div>
                    <div className="tech-card" style={{ "--position": 2 }}>
                        <div className="tech-icon">
                            <img src={css} alt="css" title="CSS" />
                        </div>
                    </div>
                    <div className="tech-card" style={{ "--position": 3 }}>
                        <div className="tech-icon">
                            <img src={python} alt="python" title="PYTHON" />
                        </div>
                    </div>
                    <div className="tech-card" style={{ "--position": 4 }}>
                        <div className="tech-icon">
                            <img src={tkinter} alt="tkinter" title="TKINTER" />
                        </div>
                    </div>
                    <div className="tech-card" style={{ "--position": 5 }}>
                        <div className="tech-icon">
                            <img src={vosk} alt="vosk" title="VOSK" />
                        </div>
                    </div>
                    <div className="tech-card" style={{ "--position": 6 }}>
                        <div className="tech-icon">
                            <img src={mediapipe} alt="mediapipe" title="MEDIAPIPE" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
