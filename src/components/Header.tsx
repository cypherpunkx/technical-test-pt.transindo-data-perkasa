import React, { useEffect, useState } from "react";
import BgHeaderDesktop from "/images/bg-header-desktop.svg";
import BgHeaderMobile from "/images/bg-header-mobile.svg";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div className="bg-desaturated-dark-cyan relative -z-50">
      <img
        src={width > 375 ? BgHeaderDesktop : BgHeaderMobile}
        alt="bgheader"
        className="w-full h-full"
      />
    </div>
  );
}

export default Header;
