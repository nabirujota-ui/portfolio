import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";


export default function App(){
  return(
    <BrowserRouter>
    <div>
      <Header/>

      <main>
    <Routes>
      <Route path = "/" element = {<Hero/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "skills" element = {<Skills/>}/>
      <Route path = "projects" element = {<Projects/>}/>
      <Route path = "contact" element = {<Contact/>}/>
    </Routes>

      </main>
      <Footer/>
    
    </div>
    </BrowserRouter>
  );
}