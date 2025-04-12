import { useState, useRef } from "react";
import media from "../assets/nice-to-meet-you-kit-harington.gif";
import sign from "../assets/nice-to-meet-you-sign-language-ezgif.com-gif-maker.gif";
import './Demo.css';

function Demo() {
    const [sideBySide, setSideBySide] = useState(false);

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 });

    const signRef = useRef(null);
    const mediaRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const rect = signRef.current.getBoundingClientRect();
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const mediaRect = mediaRef.current.getBoundingClientRect();

        let x = e.clientX - mediaRect.left - offset.current.x;
        let y = e.clientY - mediaRect.top - offset.current.y;

        x = Math.max(0, Math.min(x, mediaRect.width - signRef.current.offsetWidth));
        y = Math.max(0, Math.min(y, mediaRect.height - signRef.current.offsetHeight));

        setPosition({ x, y });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            id="demo"
            className="demo section"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <h1>Experience Real-Time Sign Language Translation</h1>
            <p>Watch how SignSynth transforms speech or text into sign language gestures using AI-powered avatars.</p>

            <div className="container">
                <div className="modeButtons">
                    <h3>Modes</h3>
                    <div className="modes">
                        <button onClick={() => setSideBySide(true)}>Side By Side</button>
                        <button onClick={() => setSideBySide(false)}>Overlay</button>
                    </div>
                </div>

                <div className={sideBySide ? "sideByside" : "overlay"}>
                    <div className="media" ref={mediaRef}>
                        <img src={media} alt="nice-to-meet-you-in-media" />
                        {!sideBySide && (
                            <div
                                className="sign"
                                ref={signRef}
                                onMouseDown={handleMouseDown}
                                style={{
                                    position: "absolute",
                                    left: `${position.x}px`,
                                    top: `${position.y}px`,
                                    cursor: "grab",
                                    background: "transparent"
                                }}
                            >
                                <img src={sign} alt="nice-to-meet-you-sign-language" />
                            </div>
                        )}
                    </div>

                    {sideBySide && (
                        <div className="sign static">
                            <img src={sign} alt="nice-to-meet-you-sign-language" />
                        </div>
                    )}
                </div>
            </div>

            <p><b>Note:</b> This is a prototype. Real-time translation performance may vary depending on your device or browser.</p>
        </div>
    );
}

export default Demo;
