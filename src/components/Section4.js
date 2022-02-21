import { useState } from "react";
import { isElementPartlyInViewport } from "../utils/utils";
import "./Section4.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Section4 = () => {
  const [boxesInView, setBoxesInView] = useState(false);

  document.addEventListener("scroll", (event) => {
    if (isElementPartlyInViewport(document.querySelector("#section4"))) {
      console.log(boxesInView);
      setBoxesInView(true);
    } else {
      setBoxesInView(false);
    }
  });

  return (
    <div
      id="section4"
      className="w-full flex  flex-col items-center mb-2 overflow-hidden"
    >
      <div></div>
      <div className="flex flex-col md:flex-row h-min">
        <div
          className={`section4-img1 min-w-[45rem] h-[30rem] relativep ${
            boxesInView ? "opacity-1" : "opacity-0"
          }`}
        >
          <p className="absolute text-4xl text-white font-semibold top-3 left-3 z-10 uppercase">
            Open everyday from 6am to 9pm
          </p>
        </div>
        <div className="flex">
          <div
            className={`section4-img2 w-1/2 md:w-[20rem] min-h-[30rem]  ${
              boxesInView ? "opacity-1" : "opacity-0"
            }   `}
          >
            <p className="absolute text-4xl text-white font-semibold top-3 left-3 z-10">
              FRESHLY BAKED GOODS
            </p>
          </div>
          <div
            className={`section4-img3 w-1/2 md:w-[20rem] min-h-[10rem] ${
              boxesInView ? "opacity-1" : "opacity-0"
            }   `}
          >
            <p className="absolute text-4xl text-white font-semibold top-3 left-3 z-10">
              ORDER TO YOUR OFFICE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
