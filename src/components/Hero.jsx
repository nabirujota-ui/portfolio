import webd from "../assets/webd.png"
export default function Hero(){
    return(
        <section className="hero-section">
             <div className="hero-intro">
                <h1>Welcome, I am <span>Nabiru Jota</span></h1>
                <p>I am a passionate web developer dedicated to building clean and user-friendly web applications using modern tools and technologies.</p>
                <button>View My Work!</button>
            </div>
            <div className="hero-image">
                <img src={webd} alt="hero-image" style={{width: 'auto', height: '200px'}}/>
                <h2>Web Developer</h2>
                <p>Here to build awesome and realistic web applications!</p>
            </div>
        </section>
    );
}