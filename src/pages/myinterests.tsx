"use client"
import Image from "next/image";
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
                <Image src="../personal-site/public/img/brownbluesweater.jpeg" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/crochet_boba.png" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/cow.png" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/owl.png" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/daisy_bag.jpeg" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/dragon.jpeg" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/penguin.jpeg" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/axolotl.jpeg" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/squid.jpeg" alt="crochet" className="interestssammy" />
                <Image src="../personal-site/public/img/mini_bee.jpeg" alt="crochet" className="interestssammy" />
            </div>

            <h2>This is my dog, Sammy!</h2>
            <div className="sammyphotos">
                <Image src="../personal-site/public/img/sammy_bandana.jpeg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammy_laying.jpeg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammy_smiling.jpg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammy_sunset.jpeg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammy_tiltinghead.jpeg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammy_tugging.jpeg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammy_with_ball.jpeg" alt="sammy" className="interestssammy" />
                <Image src="../personal-site/public/img/sammycouch.jpeg" alt="sammy" className="interestssammy" />
            </div>
        </div>
    </div> 
  );
}
