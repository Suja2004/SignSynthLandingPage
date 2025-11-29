import { useEffect } from 'react';
import './Product.css';
import working from "../assets/working.png";

function Product() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        const targets = document.querySelectorAll('.autoShow');
        targets.forEach((target) => observer.observe(target));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="product" className="product section">
            <h1 className='autoShow autoShowPC'>"Meet SignSynth – Sign Language Translator"</h1>
            <div className="overview autoShow autoShowPC">
                <div className="content ">
                    <h1>Overview</h1>
                    <p>
                        "SignSynth is an application that translates speech and text into sign language animations in real time. It’s designed to make communication inclusive for the deaf and hard-of-hearing community."
                    </p>
                </div>
                <img src={working} alt="working" />
            </div>
            <div className="features">
                <h1 className='slide4 autoShow'>Features</h1>
                <div className="featureslist">
                    <div id="feature1" className="feature autoShow slide1">
                        <h2>🎙️ Speech & Text to Sign Translation</h2>
                        <p>
                            Convert spoken words or typed text into sign language in real-time.The system listens continuously and displays recognized text along with its sign language representation.
                        </p>
                    </div>

                    <div id="feature2" className="feature autoShow slide2">
                        <h2>👋 Gloss-Based Sign Output</h2>
                        <p>
                            The app generates simplified gloss to highlight the core meaning of every sentence before showing signs.
                        </p>
                    </div>

                    <div id="feature3" className="feature autoShow slide3">
                        <h2>⏱️ Animation Delay Control</h2>
                        <p>
                            Adjust the delay between signs to control pacing. This helps users view signs at a comfortable speed - slower for learning or faster for natural conversations.
                        </p>
                    </div>

                    <div id="feature4" className="feature autoShow slide4">
                        <h2>⚙️ Desktop Application Controls</h2>
                        <p>
                            Includes quick-access toggles for speech recognition, media listening, audio source selection, and other settings inside the Windows app.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
