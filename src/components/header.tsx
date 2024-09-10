import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../styles/header.css";
import { Head } from "next/document";

interface HeaderProps {
    activeLink: string;
}

export default function Header({activeLink}: HeaderProps) {
    return (
          <div className="header">
            <a href=".">Esther Cheng</a>
    
            <div className="links">
                <a href="." className={activeLink=="home" ? "active" : ""}>Home</a>
                <a href="about" className={activeLink=="about" ? "active" : ""}>About Me</a>
                <a href="projects" className={activeLink=="projects" ? "active" : ""}>Past Work</a>
                <a href="myinterests" className={activeLink=="myinterests" ? "active" : ""}>My Interests</a>
            </div>
          </div>
    );
}