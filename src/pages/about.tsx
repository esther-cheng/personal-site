"use client"
import "../styles/about.css";
import "../app/globals.css";
import Header from "../components/header";

export default function About() {
  return (
    <div className="body">
        <Header activeLink="about"/>
        <div className="appears">
            <h2>About Me</h2>
            <img
                src="img/me2023.jpg"
                alt="A photo of me from November 2023"
                className="about-photos"
            />
            <p className="about-me-blurb">
                Hello World! I'm Esther, and I'm a current junior at Duke University in
                Durham, North Carolina. This is my virtual space where I showcase things
                I'm working on in and outside of class! I am a computer science and
                psychology double major who loves to meet people, learn about their
                interests, and listen to their life stories. I am also an avid crocheter
                (you can check out some of my projects
                <a href="myinterests"> here</a>!)
            </p>

            <h2>What I'm Doing Now</h2>
            <p className="updated-when">Updated September 6, 2024</p>
            <p className="about-me-blurb">
                I am currently a student developer at the Duke University Innovation
                Co-Lab, where I hold office hours and work on exciting projects. This
                semester, I am working on a Tablet Interface that will help track Co-Lab
                workshop attendance and participant satisfaction!
            </p>
            <p className="about-me-blurb">
                I just finished Duke University's Code+ Program where I built an AI
                Registrar tool that integrates the Duke University course catalog with
                Open AI's GPT-4's language capabilities to field questions about course
                registration and className recommendations.
            </p>

            <p className="about-me-blurb">
                This semester, I will be taking Human Skills for Software Engineering
                (CS290), Psych Methods and Statistics (PSY205), Developmental Psychology
                (PSY103), and Introduction to Cultural Psychology (PSY105).
            </p>

            <img src="img/sammy_smiling.jpg" alt="A photo of Sammy" className="about-photos" />

            <h2>Fun Facts</h2>
            <ul className="about-me-blurb">
                <li>
                My love for Computer Science started in third grade while learning
                Scratch
                </li>
                <li>My favorite color is blue</li>
                <li>I have a miniature poodle named Sammy</li>
                <li>I am an undergraduate TA for Computer Architecture</li>
            </ul>

            <a href="#" className="jump">Jump to top</a>
        </div>
    </div>
  );
}
