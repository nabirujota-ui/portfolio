import task from "../assets/task.jpg";
import ecommerce from "../assets/ecommerce.jpg";
export default function Projects(){
    return(
        <section className="projects-section">
            <div className="projects-title">
                <h1>Featured Projects</h1>
                <p>Some of the projects I have built</p>
            </div>
            <div className="projects">
                <div className="task">
                    <img src={task} alt="task-manager" style= {{width: 'auto', height: '100px'}} />
                    <h2>Task Manager</h2>
                    <p>React application for tracking and managing daily to-dos.</p>
                </div>

                <div className="ecom">
                    <img src={ecommerce} alt="e-commerce" style= {{width: 'auto', height: '100px'}} />
                    <h2>E-commerce Website</h2>
                    <p>An interactive e-commerce website built with django framework.</p>
                </div>
                
            </div>

        </section>
    );
}