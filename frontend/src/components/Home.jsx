import './Home.css';
function Home() {

    return (
        <section id='home' className="home section">
            <h1 >Al-Powered Sign Language Translation for Digital Medias</h1>
            <p className='zoom'>Bridging the communication gap between the spoken world and the silent one.</p>
            <p className='zoom'> SignSynth uses AI to translate speech and text into sign language in real-time making digital media accessible for all.</p>
            <a href='https://github.com/Suja2004/ASR/releases/download/v0.1.0/SignSynth.zip' target='_blank' download={true}>  <button className='btn updown'>Install for Windows</button></a>
        </section>
    )
}

export default Home;
