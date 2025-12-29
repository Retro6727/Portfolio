
import About from "./about";
import Contact from "./pages/contact";
import Theme from "./pages/navbar";
import Project from "./pages/project";
import Skills from "./pages/skills";

export const metadata = {
  title: "Welcome To My Portfolio !!",
};

export default function Home() {
  return (
    <>
      <Theme />
      <div className="container1">
        <div className="textColumn">
            <h1>Hi, I am Rupesh</h1>
          </div>
        <div className="imageColumn">
          <img
            src="/myprofile.jpg"
            alt="Profile"
          />
        </div>
      </div>
      <div className="container2">
        <About />
      </div>
      <div className="container3">
        <Skills />
      </div>
      <div className="container4">
        <Project />
      </div>
      <div className="container5">
        <Contact />
      </div>
    </>
  );
}
