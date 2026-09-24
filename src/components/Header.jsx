import NavBar from "./NavBar";
export default function Header(){
    return(
        <section className="header">
            <div className="logo">
                <h1>Nabiru.<span style={{color:'orange'}}>Dev</span></h1>
            </div>
            <div className="nav-bar">
                <NavBar/>
            </div>
            
        </section>
    )
}