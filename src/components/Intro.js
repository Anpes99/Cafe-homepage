import "./Intro.css";
import steamingcup from "../images/steamingcup.mp4";

const Intro = () => {
  return (
    <div className=" flex flex-col text-4xl sm:text-5xl font-semibold space-y-0.5 pl-10 pt-[5rem] w-max overflow-hidden">
      <p className=" uppercase ">LOREM IMPSUM DOLOR SIT</p>
      <p className=" uppercase cursor-pointer border-b border-b-transparent hover:border-b-black">
        aperiam debitis,
      </p>
      <p className=" uppercase serif font-normal cursor-pointer border-b border-b-transparent hover:border-b-black">
        Recusandae, quisquam a,
      </p>
      <p className=" uppercase serif font-normal">
        amet consectetur adipisicing,
      </p>
      <p className=" uppercase cursor-pointer border-b border-b-transparent hover:border-b-black">
        Veniam laborum repellendus,
      </p>
      <p className=" uppercase serif font-normal uppercase">
        laboriosam nostrum a cupiditate,
      </p>
      <p className=" uppercase serif font-normal">LOREM IMPSUM DOLOR SIT,</p>
      <p className="uppercase">AND MORE.</p>
      <video
        className="absolute -z-10 left-0 top-[40rem] sm:top-[10rem] sm:right-0 sm:left-auto w-[30rem]"
        autoPlay
        muted
        loop
        src={steamingcup}
      ></video>
    </div>
  );
};

export default Intro;
