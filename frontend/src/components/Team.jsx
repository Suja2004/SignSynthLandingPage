import './Team.css';
import vijayN from '../assets/vijayN.jpg';
import sathwik from '../assets/sathwik.jpg';
import sujan from '../assets/sujan.jpg';
import vijayT from '../assets/vijayT.jpg';

function Team() {
    return (
        <div id='team' className='team'>
            <h1>Meet The Team</h1>
            <div className="slider" style={{ "--quantity": 4 }}>
                <div className="item" style={{ "--position": 1 }}>
                    <div className="content">
                        <img src={vijayN} alt="" />
                        <h3>Vijay Netakal</h3>
                        <h4>4MW22CS178</h4>
                        <p>Team Lead</p>
                    </div>
                </div>
                <div className="item" style={{ "--position": 2 }}>
                    <div className="content">
                        <img src={sathwik} alt="" />
                        <h3>Sathwik</h3>
                        <h4>4MW22CS138</h4>
                        <p>Member</p>
                    </div>
                </div>
                <div className="item" style={{ "--position": 3 }}>
                    <div className="content">
                        <img src={sujan} alt="" />
                        <h3>Sujan Kumar K</h3>
                        <h4>4MW22CS164</h4>
                        <p>Member</p>
                    </div>
                </div>
                <div className="item" style={{ "--position": 4 }}>
                    <div className="content">
                        <img src={vijayT} alt="Vijay Telang" />
                        <h3>Vijay Telang</h3>
                        <h4>4MW22CS179</h4>
                        <p>Member</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
