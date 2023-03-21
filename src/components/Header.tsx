import React, { useEffect, useRef, useState } from "react";
import BgHeaderDesktop from "/images/bg-header-desktop.svg";
import BgHeaderMobile from "/images/bg-header-mobile.svg";

function Header() {
  return (
    <div className="bg-desaturated-dark-cyan relative -z-50">
      <img src={BgHeaderDesktop} alt="bgheader" className="w-full h-full" />
    </div>
  );
}

export default Header;
