import { useEffect, useState } from "react";
import { isElementPartlyInViewport } from "../utils/utils";
import "./Section3.css";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const Section3 = () => {
  const [boxesInView, setBoxesInView] = useState(false);

  useEffect(() => {
    if (
      isElementPartlyInViewport(
        document.querySelector("#section3-sliding-boxes")
      )
    ) {
      setBoxesInView(true);
    }
  });

  document.addEventListener("scroll", (event) => {
    if (
      isElementPartlyInViewport(
        document.querySelector("#section3-sliding-boxes")
      )
    ) {
      console.log(boxesInView);
      setBoxesInView(true);
    } else {
      setBoxesInView(false);
    }
  });

  return (
    <div
      id="section3"
      className="my-[10rem] w-full overflow-hidden flex justify-center items-center"
    >
      <div
        id="section3-sliding-boxes"
        className="w-full flex justify-center relative"
      >
        <div
          className={`sliding-box cursor-pointer  h-[30rem] border-white border-2 w-[30rem] ${
            boxesInView
              ? "opacity-100  translate-x-[0.06225rem] "
              : "-translate-x-[100rem] opacity-0"
          } `}
        >
          <h2 className="absolute top-3 left-3 text-white font-medium text-3xl serif z-10">
            FOR CUSTOMERS
          </h2>

          <p className="absolute top-[30%] max-w-xs left-3 text-white  text-lg z-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            laborum aspernatur possimus doloribus numquam voluptatibus
            repellendus excepturi accusamus impedit officia iusto consequuntur.
          </p>

          <a className="overflow-hidden overflowed-background-left flex items-center space-x-6 absolute bottom-5 left-3 text-white  text-xl z-10 border-2 border-white text-center p-3">
            <p>CLICK TO LEARN MORE</p>
            <ArrowNarrowRightIcon className="h-10" />
          </a>
        </div>
        <div
          className={`sliding-box  h-[30rem] border-white border-2 w-[30rem] ${
            boxesInView
              ? "opacity-100 -translate-x-[0.06225rem] "
              : "translate-x-[100rem] opacity-0"
          } `}
        >
          <h2 className="absolute top-3 left-3 text-white font-medium text-3xl serif z-10">
            FOR ORGANISATIONS
          </h2>

          <p className="absolute top-[30%] max-w-xs left-3 text-white  text-lg z-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
            laborum aspernatur possimus doloribus numquam voluptatibus
            repellendus excepturi accusamus impedit officia iusto consequuntur.
          </p>

          <a className="overflow-hidden overflowed-background-left flex items-center space-x-6 absolute bottom-5 left-3 text-white  text-xl z-10 border-2 border-white text-center p-3">
            <p>CLICK TO LEARN MORE</p>
            <ArrowNarrowRightIcon className="h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section3;
