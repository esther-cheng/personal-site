"use client";
import "../styles/about.css";
import "../app/globals.css";
import Header from "../components/header";

export default function About() {
  return (
    <div className="body">
      <Header activeLink="about" />
      <div className="appears">
        <div className="about-container">
          <img
            src="img/esther-table.jpg"
            alt="Me at a restaurant in Chapel Hill"
            id="table-photo"
          />
          <div className="about-text-container">
            <h3 className="about-subtitle">
              <i>Hello World!</i> I'm Esther, and I'm a current junior at Duke
              University in Durham, North Carolina.
            </h3>
            <p className="about-me-blurb">
              I am a computer science and psychology double major who loves to
              meet people, learn about their interests, and listen to their life
              stories. I am also an avid crocheter (you can check out some of my
              projects
              <a href="myinterests"> here</a>!)
            </p>
            <p className="about-me-blurb">
              I am currently a student developer at the Duke University
              Innovation Co-Lab, where I hold office hours and work on exciting
              projects. This semester, I am working on a Tablet Interface that
              will help track Co-Lab workshop attendance and participant
              satisfaction!
            </p>
          </div>
        </div>

        <div className="about-container" id="second">
          <div className="about-text-container" id="second-text">
            <h3 className="about-subtitle" id="second-subtitle">
              What I've Been Up To
            </h3>
            <p className="about-me-blurb">
              I just finished Duke University's Code+ Program where I built an
              AI Registrar tool that integrates the Duke University course
              catalog with Open AI's GPT-4's language capabilities to field
              questions about course registration and class recommendations.
            </p>
            <p className="about-me-blurb">
              This semester, I will be taking Human Skills for Software
              Engineering (CS290), Psych Methods and Statistics (PSY205),
              Developmental Psychology (PSY103), and Introduction to Cultural
              Psychology (PSY105).
            </p>
            <p className="about-me-blurb">
              I am also an undergraduate TA for Computer Architecture. I loved
              learning about the mechanisms behind technology, and I’m excited I
              get to teach it, too!
            </p>
          </div>
          <img
            src="img/esther-gardens.jpg"
            alt="Me at the Duke Gardens"
            id="gardens-photo"
          />
        </div>

        <a href="#" className="jump">
          Jump to top
        </a>
      </div>
    </div>
  );
}
