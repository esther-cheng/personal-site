"use client"
import Image from "next/image";
import "../styles/projects.css";
import "../app/globals.css";
import Header from "../components/header";
import {prefix} from "../app/prefix"

export default function Projects() {
  return (
    <div>
        <Header activeLink="projects"/>
        <div className="appears">
            <div className="project-container">
                <div className="images-container">
                    <video
                    className="course-advisor-demo"
                    src={`${prefix}/course-advisor-demo.mov`}
                    ></video>
                    <embed
                    src={`${prefix}/ai-course-poster.pdf`}
                    className="course-advisor-demo"
                    />
                    <embed
                    src={`${prefix}/me2023.ai-course-onepage.pdf`}
                    className="course-advisor-demo"
                    />
                </div>
                <h3 className="project-title">AI Course Advisor</h3>
                <p className="tools-used">
                    Tools Used: Figma, Python/Flask, React/TypeScript, MongoDB, OpenAI,
                    Docker, Git, Redis
                </p>
                <p className="project-blurb">
                    Our project integrated Duke's course catalog with a fine-tuned version
                    of OpenAI's gpt-3.5-turbo model. We semantically searched our database
                    for vector representations closest to the user's query (RAG) to generate
                    relevant courses. Throughout the summer, we worked closely with the Duke
                    University Registrar and the Academic Advising Center to make a tool
                    that was accessible, useful, and accurate for students and advisors
                    alike.
                </p>
            </div>
        </div>
    </div>
  );
}
