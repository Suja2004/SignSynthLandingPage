import { useRef, useEffect } from "react";
import media from "../assets/nice-to-meet-you-kit-harington.gif";
import sign from "../assets/nice-to-meet-you-sign-language-ezgif.com-gif-maker.gif";
import './Demo.css';

function Demo() {
    const mediaRef = useRef(null);

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

        const targets = document.querySelectorAll('.animate-on-scroll');
        targets.forEach((target) => observer.observe(target));

        return () => observer.disconnect();
    }, []);


    return (
        <section
            id="demo"
            className="demo section"
        >
            <h1>Experience Real-Time Sign Language Translation</h1>
            <p>Watch how SignSynth transforms speech or text into sign language gestures using AI-powered avatars.</p>

            <div className="container">
                <div className="sideByside">
                    <div className="media animate-on-scroll slide-right" ref={mediaRef}>
                        <img src={media} alt="nice-to-meet-you-in-media" />
                    </div>

                    <div className="sign static animate-on-scroll slide-left">
                        <img src={sign} alt="nice-to-meet-you-sign-language" />
                    </div>
                </div>
            </div>

            <p><b>Note:</b> This is a prototype. Real-time translation performance may vary depending on your device or browser.</p>
        </section>
    );
}

export default Demo;

