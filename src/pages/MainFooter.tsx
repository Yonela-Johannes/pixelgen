import Logo from "../assets/PixelGen.jpg";

const MainFooter = () => {

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between p-2 md:px-7">
      <img
        className="rounded-md h-[40px] w-[40px]"
        src={Logo}
        alt="PixelGen"
      />
      <>
        <footer>
          <span
          >
            &copy; 2023. All Rights Reserved.
          </span>
          <span className="flex gap-2"
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Made with &hearts; by{" "}
            <a className="text-orange-400"
              href="https://github.com/Yonela-Johannes"
              target={"_blank"}
              rel="dofollow noreferrer"
            >
              Yonela Johannes
            </a>
          </span>
        </footer>
      </>
      <div className="footer-bottom">
        <div className="container">
          <ul className="social-list">

            <li>
              <a href="https://www.facebook.com/PixelGenZA" target="_blank" className="social-link">Fa.</a>
            </li>

            <li>
              <a href="https://www.instagram.com/pixelgen_za/" target="_blank" className="social-link">Insta.</a>
            </li>

            <li>
              <a href="https://twitter.com/nEs_327" target="_blank" className="social-link">Tw.</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
