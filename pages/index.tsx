import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

type StringArray = Array<String>;

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [type, setType] = useState("");
  const initialText =
    "It all started in 2020 when I need a portfolio website for my vector graphic works. I started learning HTML, and quickly after I got into CSS, at that point I was mind blown by it's power!";
  const initialTextArr = initialText.split("");

  function loopThroughSplittedText() {
    for (var i = 0; i < initialTextArr.length; i++) {
      // for each iteration console.log a word
      // and make a pause after it
      (function (i) {
        setTimeout(function () {
          setType((prev) => (prev += initialTextArr[i]));
          console.log(initialTextArr[i]);
        }, 50 * i);
      })(i);
    }
  }

  useEffect(loopThroughSplittedText, []);

  return (
    <>
      <Head>
        <title>Firmanski | Frontend developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} w-screen h-screen`}>
        <div className="carousel w-full h-full">
          <div
            id="item1"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">{type}</p>
          </div>
          <div
            id="item2"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              After a few months, I’m being confident to build a static website.
              And my first website is this
            </p>
          </div>
          <div
            id="item3"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              I know that’s so boring and not professional. I want a website
              that feels like a native app. Then I met react js.
            </p>
          </div>
          <div
            id="item4"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              I Google how to learn reactJS, and one thing I need to do is
              learning Javascript first.
            </p>
          </div>
          <div
            id="item5"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              I learn javascript for almost a year. Through Jonas Schmedtman
              course.
            </p>
          </div>
          <div
            id="item6"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              I super excited with this programming language, I try to build a
              website with the trio, HTML, CSS, and Javascript.
            </p>
          </div>
          <div
            id="item7"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              A year later, I already know ReactJS after learn react through
              Academind course, I am able to develop some frontend app, and
              continue my learning path.
            </p>
          </div>
          <div
            id="item8"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              Now I have know these some frameworks
            </p>
          </div>
          <div
            id="item9"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              And working with databases using APIs.
            </p>
          </div>
          <div
            id="item10"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              Finally, I can build this vector graphic portfolio. Proud of me!
            </p>
          </div>
          <div
            id="item11"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              But with my knowledge this far, I know that programming is my
              choice rather than doing vector graphics.
            </p>
          </div>
          <div
            id="item12"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              So now, I’m serious with my journey here, and want to be a
              software engineer.
            </p>
          </div>
          <div
            id="item13"
            className="carousel-item w-full h-full flex justify-center items-center gap-12 "
          >
            <p className="max-w-xs md:max-w-md">
              So, can I be a part of your amazing team?
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
