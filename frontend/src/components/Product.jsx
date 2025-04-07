import './Product.css';
import working from "../assets/working.png";
function Product() {
    return (
        <div id="product" className="product">
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
                <h1 className='slide4'>Features</h1>
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
                        <h2>🔤 Text Simplification for Sign Grammar
                        </h2>
                        <p>SignSynth adjusts spoken or written sentences to follow sign language grammar rules. It simplifies complex phrases and idioms so the meaning stays clear in translation.</p>
                    </div>
                    <div id="feature4" className="feature autoShow slide4">
                        <h2>📱 Works Across Devices & Platforms (Zoom, YouTube, etc.)
                        </h2>
                        <p>You can use SignSynth on mobile, desktop, and web apps. It works with video platforms and meeting tools like YouTube, Zoom, and Google Meet to ensure accessibility everywhere.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;