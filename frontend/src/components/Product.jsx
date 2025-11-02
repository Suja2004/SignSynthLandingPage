import { useEffect } from 'react'; // Import useEffect
import './Product.css';
import working from "../assets/working.png";

function Product() {

    // This effect runs once when the component mounts
    useEffect(() => {
        // Create an observer
        const observer = new IntersectionObserver((entries) => {
            // Loop over the entries
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add the 'is-visible' class when the element is in view
                    entry.target.classList.add('is-visible');
                    // Stop observing the element so the animation doesn't re-run
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Find all elements with the 'autoShow' class and start observing them
        const targets = document.querySelectorAll('.autoShow');
        targets.forEach((target) => observer.observe(target));

        // Cleanup: Disconnect the observer when the component unmounts
        return () => observer.disconnect();
    }, []); // The empty array [] ensures this runs only once

    return (
        // The JSX remains exactly the same.
        // The 'autoShow' class is now our "hook" for the observer.
        <section id="product" className="product section">
            <h1 className='autoShow autoShowPC'>"Meet SignSynth – AI-Powered Sign Language Translator"</h1>
            <div className="overview autoShow autoShowPC">
                <div className="content ">
                    <h1>Overview</h1>
                    <p>
                        "SignSynth is an AI-powered application that translates speech and text into sign language animations in real time. It’s designed to make communication inclusive for the deaf and hard-of-hearing community."
                    </p>
                </div>
                <img src={working} alt="working" />
            </div>
            <div className="features">
                <h1 className='slide4 autoShow'>Features</h1>
                <div className="featureslist" >
                    <div id="feature1" className="feature autoShow slide1">
                        <h2>
                            🎙️ Real-Time Translation
                        </h2>
                        <p>SignSynth instantly converts spoken or written words into sign language gestures. This helps users follow conversations as they happen, making communication faster and smoother for everyone.</p>
                    </div>
                    <div id="feature2" className="feature autoShow slide2">
                        <h2>
                            👤 Lifelike 3D Avatar Animations
                        </h2>
                        <p>Our realistic 3D avatar performs accurate sign language gestures, including facial expressions and body movements. This makes the translation feel more natural and easier to understand.</p>
                    </div>
                    <div id="feature3" className="feature autoShow slide3">
                        <h2>𔒡 Text Simplification for Sign Grammar
                        </h2>
                        <p>SignSynth adjusts spoken or written sentences to follow sign language grammar rules. It simplifies complex phrases and idioms so the meaning stays clear in translation.</p>
                    </div>
                    <div id="feature4" className="feature autoShow slide4">
                        <h2>💻 Desktop Integration (Zoom, YouTube, etc.)
                        </h2>
                        <p>SignSynth runs as a Windows desktop application. It can overlay video platforms and meeting tools like YouTube, Zoom, and Google Meet to provide real-time translations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;
