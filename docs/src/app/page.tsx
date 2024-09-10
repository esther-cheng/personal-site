"use client"
import Image from "next/image";
import "../styles/esthers-site.css"
import Header from "../components/header";

export default function Home() {
  return (
    <div className="body">
      <Header activeLink="home"/>
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
          ><img src="../img/github.png" className="icon"
        /></a>
        <a href="https://www.linkedin.com/in/estcheng/"
          ><img src="../img/linkedin.png" className="icon"
        /></a>
        <a href="EstherCheng.pdf"><img src="../img/page.png" className="icon" /></a>
        <a href="mailto:esther.cheng@duke.edu"
          ><img src="../img/email.png" className="icon"
        /></a>
      </div>
    </div>
  );
}
