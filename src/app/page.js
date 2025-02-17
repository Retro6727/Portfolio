
import About from "./about";
import Contact from "./pages/contact";
import Theme from "./pages/navbar";
import Project from "./pages/project";

export default function Home() {
  return (
    <>
      <Theme />
      <div className="container1">
        <div className="textColumn">
          <title>Welcome To My Portfolio !!</title>
          <h1>Hi, My name is Rupesh</h1>
          <h2>I am a Web Developer | 3D Artist</h2>
        </div>
        <div className="imageColumn">
          <img
            src="https://images.unsplash.com/photo-1613059093860-582e53c584c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
        </div>
      </div>
      <div className="container2">
        <About />
      </div>
      <div className="container3">
        <Project />
      </div>
      <div className="container4">
        <Contact />
      </div>
    </>
  );
}
