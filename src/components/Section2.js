import "./Section2.css";
import coffeeMeasure from "../images/coffee-measure.jpg";
import { useEffect, useRef, useState } from "react";
import {
  getTranslateY,
  isElementInViewport,
  isElementPartlyInViewport,
} from "../utils/utils";

const Section2 = ({ bodyRef }) => {
  const [lastPageYOffset, setLastPageYOffset] = useState();
  const [movingText1TranslateY, setMovingText1TranslateY] = useState(100);
  // const [keepCentered, setKeepCentered] = useState(false);

  /*   useEffect(() => {
    const movingtext1 = document.querySelector("#section2-movingtext1");
    const movingtext2 = document.querySelector("#section2-movingtext2");
    const movingtext3 = document.querySelector("#section2-movingtext3");
    const movingtext4 = document.querySelector("#section2-movingtext4");
    const movingtext5 = document.querySelector("#section2-movingtext5");
    const movingtext6 = document.querySelector("#section2-movingtext6");
    const section2 = document.querySelector("#section2");

    if (isElementPartlyInViewport(movingtext1)) {
      movingtext1.style.transform = "translateY(0)";
      movingtext1.style.opacity = "1";
    }
    if (isElementPartlyInViewport(movingtext2)) {
      movingtext2.style.transform = "translateY(0)";
      movingtext2.style.opacity = "1";
    }

    if (isElementPartlyInViewport(movingtext3)) {
      movingtext3.style.transform = "translateY(0)";
      movingtext3.style.opacity = "1";
    }

    if (isElementPartlyInViewport(movingtext4)) {
      movingtext4.style.transform = "translateY(0)";
      movingtext4.style.opacity = "1";
    }
    if (isElementPartlyInViewport(movingtext5)) {
      movingtext5.style.transform = "translateY(0)";
      movingtext5.style.opacity = "1";
    }
    if (isElementPartlyInViewport(movingtext6)) {
      movingtext6.style.transform = "translateY(0)";
      movingtext6.style.opacity = "1";
    }
  }, []); */

  document.addEventListener("scroll", (event) => {
    setLastPageYOffset(window.pageYOffset);
    const movingtext1 = document.querySelector("#section2-movingtext1");
    const movingtext2 = document.querySelector("#section2-movingtext2");
    const movingtext3 = document.querySelector("#section2-movingtext3");
    const movingtext4 = document.querySelector("#section2-movingtext4");
    const movingtext5 = document.querySelector("#section2-movingtext5");
    const movingtext6 = document.querySelector("#section2-movingtext6");
    const section2 = document.querySelector("#section2");

    if (isElementInViewport(movingtext1)) {
      movingtext1.style.transform = "translateY(0)";
      movingtext1.style.opacity = "1";
    }
    if (isElementInViewport(movingtext2)) {
      movingtext2.style.transform = "translateY(0)";
      movingtext2.style.opacity = "1";
    }

    if (isElementInViewport(movingtext3)) {
      movingtext3.style.transform = "translateY(0)";
      movingtext3.style.opacity = "1";
    }

    if (isElementInViewport(movingtext4)) {
      movingtext4.style.transform = "translateY(0)";
      movingtext4.style.opacity = "1";
    }
    if (isElementInViewport(movingtext5)) {
      movingtext5.style.transform = "translateY(0)";
      movingtext5.style.opacity = "1";
    }
    if (isElementInViewport(movingtext6)) {
      movingtext6.style.transform = "translateY(0)";
      movingtext6.style.opacity = "1";
    }
    /*       if (isElementInViewport(section2)) {
        setKeepCentered(true);
        console.log(getTranslateY(section2));
        section2.style.position = "fixed";
        section2.style.top = "0";
        section2.style.left = "0";
      } */

    //getTranslateY(movingtext1);

    // console.log(movingtext1.style.transform);

    //console.log(window.pageYOffset);

    setLastPageYOffset(window.pageYOffset);
  });

  return (
    <div className=" md:-mt-[25rem] ">
      <div
        id="section2"
        className="font-semibold tracking-wide space-y-1 text-4xl flex flex-col items-center pt-[5rem]"
      >
        <p id="section2-movingtext1" className="text-lg mb-10">
          WHAT WE DO
        </p>
        <span id="section2-movingtext2" className="text-center">
          <p>OUR COFFEE</p>
          <p>IS CAREFULLY SELECTED</p>
          <p>GREAT TASTING COFFEES</p>
          <p>FROM AROUND THE WORLD</p>
        </span>
        <p id="section2-movingtext3" className="serif font-medium">
          LOREM IMSUM DOOR, SIT AMET
        </p>
        <p id="section2-movingtext4" className="font-normal tracking-widest">
          CONSECTETUR ADIPISICING ELIT.
        </p>

        <p
          id="section2-movingtext5"
          className="text-base text-center max-w-xl p-10"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum
          aspernatur possimus doloribus numquam voluptatibus repellendus
          excepturi accusamus impedit officia iusto consequuntur id ab, nobis
          blanditiis quia reprehenderit dolorem sint.
        </p>
        <p
          id="section2-movingtext6"
          className="text-base text-center max-w-xl px-10"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laborum
          aspernatur possimus doloribus numquam voluptatibus repellendus
          excepturi accusamus impedit officia iusto consequuntur id ab, nobis
          blanditiis quia reprehenderit dolorem sint.
        </p>
      </div>
    </div>
  );
};

export default Section2;
