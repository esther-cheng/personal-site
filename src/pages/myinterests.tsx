"use client"
import Image from "next/image";
import {prefix} from "../app/prefix"
import "../styles/myinterests.css";
import "../app/globals.css";
import Header from "../components/header";

export default function Interests() {
  return (
    <div>
        <Header activeLink="myinterests"/>
        <div className="appears">
            <h2>Here are some of my recent crochet projects!</h2>
            <div className="crochetphotos">
                <Image src={`${prefix}/brownbluesweater.jpeg`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/crochet_boba.png`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/cow.png`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/owl.png`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/daisy_bag.jpeg`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/dragon.jpeg.jpg`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/penguin.jpeg.jpg`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/axolotl.jpeg`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/squid.jpeg`} alt="crochet" className="interestssammy" />
                <Image src={`${prefix}/mini_bee.jpeg`} alt="crochet" className="interestssammy" />
            </div>

            <h2>This is my dog, Sammy!</h2>
            <div className="sammyphotos">
                <Image src={`${prefix}/sammy_bandana.jpeg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammy_laying.jpeg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammy_smiling.jpg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammy_sunset.jpeg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammy_tiltinghead.jpeg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammy_tugging.jpeg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammy_with_ball.jpeg`} alt="sammy" className="interestssammy" />
                <Image src={`${prefix}/sammycouch.jpeg`} alt="sammy" className="interestssammy" />
            </div>
        </div>
    </div> 
  );
}
