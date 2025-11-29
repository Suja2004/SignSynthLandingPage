import './Home.css';

function Home() {
    return (
        <section id='home' className="home section">
            <div className="home-container">
                <h1>Sign Language Translation for Digital Medias</h1>
                <p className='zoom'>Bridging the communication gap between the spoken world and the silent one.</p>
                <a href='https://github.com/Suja2004/ASR/releases/download/v1.0.0/SignSynth-Installer.exe' target='_blank' download={true}>
                    <button className='btn updown'>Install for Windows</button>
                </a>
            </div>
        </section>
    )
}

export default Home;
