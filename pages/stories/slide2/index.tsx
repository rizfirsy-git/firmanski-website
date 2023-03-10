import { ReactElement } from "react";
import { NextPageWithLayout } from "../../_app";
import MainLayout from "../../../layout/MainLayout";
import HomeLayout from "../../../layout/StoriesLayout";
import { useState, useEffect } from "react";

const Slide2: NextPageWithLayout = () => {
  const [type, setType] = useState("");
  const initialText = `Then I’m being confident to build a static website.
    And my first website is this`;
  const initialTextArr = initialText.split("");

  function loopThroughSplittedText() {
    for (let i = 0; i < initialTextArr.length; i++) {
      // for each iteration, print each word
      // and make a pause after it
      (function (i) {
        setTimeout(function () {
          setType((prev) => (prev += initialTextArr[i]));
        }, 50 * i);
      })(i);
    }
  }

  useEffect(loopThroughSplittedText, []);
  return (
    <div
      id="item1"
      className="carousel-item w-screen h-screen flex justify-center items-center gap-12"
    >
      <div className="w-96  h-auto overflow-hidden">
        <h1 className="text-4xl mb-7 font-riz-h leading-loose">
          📖After a few months learning,
        </h1>
        <p className="max-w-xs md:max-w-md">{type}</p>
      </div>
    </div>
  );
};

Slide2.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <HomeLayout>{page}</HomeLayout>
    </MainLayout>
  );
};

export default Slide2;
