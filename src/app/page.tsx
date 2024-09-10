"use client"
import Image from "next/image";
import "../styles/esthers-site.css";
import "./globals.css";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="body">
      <Header activeLink="home"/>
      <div className="appears" id="home">
        <div className="welcome-container">
            <h1 className="welcome-title">Hey there! I'm Esther!</h1>
            <h2 className="welcome-subtitle">Welcome to my page. 👩🏻‍💻</h2>
            <p className="welcome-blurb">
              I'm a Computer Science and Psychology student at Duke University. I'm
              interested in UX design and software engineering. I like dogs 🐶,
              lifting 🏋🏻‍♀️, and crocheting 🧶!
            </p>
        </div>

        <div className="icons-container">
          <a href="https://github.com/esther-cheng"
            ><Image src="../img/github.png" alt="github" className="icon"
          /></a>
          <a href="https://www.linkedin.com/in/estcheng/"
            ><Image src="../img/linkedin.png" alt="linkedin" className="icon"
          /></a>
          <a href="EstherCheng.pdf"><Image src="../img/page.png" alt="resume" className="icon" /></a>
          <a href="mailto:esther.cheng@duke.edu"
            ><Image src="../img/email.png" alt="email" className="icon"
          /></a>
        </div>
      </div>
    </div>
  );
}
