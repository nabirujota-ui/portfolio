import django from "../assets/django.svg";
import react from "../assets/react.svg";
import javascript from "../assets/javascript.svg";
import css from "../assets/css.png"
export default function Skills(){
    return(
        <section className="skills">

            <div className="skills-title">
                <h1>My Skills</h1>
                <p>Technologies I am working and building with</p>
            </div>

            <div className="tools">
                <div className="react">
                    <img src={react} alt="react" style={{width: 'auto', height: '40px'}}/>
                    <h2>React</h2>
                    <p>Building interactive components and single-page user interfaces.</p>
                </div>

                <div className="javascript">
                    <img src={javascript} alt="javascript" style={{width: 'auto', height: '40px'}}/>
                    <h2>JavaScript</h2>
                    <p>Adding interactivity, handling events, and writing core web logic.</p>
                </div>

                <div className="css">
                    <img src={css} alt="css" style={{width: 'auto', height: '40px'}}/>
                    <h2>CSS</h2>
                    <p>Styling layouts using Flexbox, Grid, and clean responsive design.</p>
                </div>

                <div className="django">
                    <img src={django} alt="django" style={{width: 'auto', height: '40px'}}/>
                    <h2>Django</h2>
                    <p>Developing robust backend servers, databases, and Python APIs.</p>
                </div>
            </div>
        </section>
    );
}