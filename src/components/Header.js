import "./Header.css";
const Header = () => {
  return (
    <div className="flex justify-between p-10 font-semibold text-lg">
      <h1 className="text-3xl tracking-widest">CAFESHOP</h1>
      <div className="flex space-x-[7rem]">
        <div className="space-x-10">
          <a className="header__btn" href="#section1">
            Intro
          </a>
          <a className="header__btn" href="#section2">
            What
          </a>
          <a className="header__btn" href="#section3">
            Info
          </a>
          <a className="header__btn" href="#section4">
            Visit
          </a>
        </div>
        <div className="flex space-x-1 ">
          <a href="">LI</a>
          <p>|</p>
          <a href="">TW</a>
          <p>|</p>
          <a href="">ME</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
