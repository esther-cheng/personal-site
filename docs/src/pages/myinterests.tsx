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
                <img src="../img/brownbluesweater.jpeg" className="interestssammy" />
                <img src="../img/crochet_boba.png" className="interestssammy" />
                <img src="../img/cow.png" className="interestssammy" />
                <img src="../img/owl.png" className="interestssammy" />
                <img src="../img/daisy_bag.jpeg" className="interestssammy" />
                <img src="../img/dragon.jpeg" className="interestssammy" />
                <img src="../img/penguin.jpeg" className="interestssammy" />
                <img src="../img/axolotl.jpeg" className="interestssammy" />
                <img src="../img/squid.jpeg" className="interestssammy" />
                <img src="../img/mini_bee.jpeg" className="interestssammy" />
            </div>

            <h2>This is my dog, Sammy!</h2>
            <div className="sammyphotos">
                <img src="../img/sammy_bandana.jpeg" className="interestssammy" />
                <img src="../img/sammy_laying.jpeg" className="interestssammy" />
                <img src="../img/sammy_smiling.jpg" className="interestssammy" />
                <img src="../img/sammy_sunset.jpeg" className="interestssammy" />
                <img src="../img/sammy_tiltinghead.jpeg" className="interestssammy" />
                <img src="../img/sammy_tugging.jpeg" className="interestssammy" />
                <img src="../img/sammy_with_ball.jpeg" className="interestssammy" />
                <img src="../img/sammycouch.jpeg" className="interestssammy" />
            </div>
        </div>
    </div> 
  );
}
