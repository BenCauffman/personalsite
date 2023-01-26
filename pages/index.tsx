import React, { useContext, useEffect, useState } from "react";
import ProfileLayout from "../src/ProfileLayout";
import MainBody from "../src/MainBody";
import { ResponsiveValue, useMediaQuery } from "@chakra-ui/react";
import DetailContext from "../src/context";
import Leftsidebar from "../src/Leftsidebar";
import Rightsidebar from "../src/Rightsidebar";
import { isMobile } from "react-device-detect";

const Index: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const [showInitial, setShowInitial] = useState(true);
  const { fixed } = useContext(DetailContext);
  const [xLessThan768] = useMediaQuery("(min-width: 768px)");
  const [yLessThan630] = useMediaQuery("(min-height: 630px)");

  useEffect(() => {
    function makeVisible(el: HTMLElement) {
      el.style.overflow = "visible";
      el.style.display = "block";
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      });
    }
    function scrollDown(el: HTMLElement) {
      el.scrollIntoView({ behavior: "smooth" });
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 1000);
      });
    }

    function removeTop() {
      setShowInitial(false);
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      });
    }
    const element = document.getElementById("lower-site")!;

    if (!toggle) {
      new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      })
        .then(() => makeVisible(element))
        .then(() => scrollDown(element))
        .then(() => removeTop());
    }
  }, [toggle]);

  return (
    <div>
      {showInitial && !isMobile ? (
        <ProfileLayout toggle={toggle} setToggle={setToggle} />
      ) : null}

      {!xLessThan768 && isMobile ? (
        <div id="lower-site">
          <MainBody />
        </div>
      ) : (
        <>
          <Leftsidebar fixed={fixed} />
          <div style={{ display: "none", overflow: "hidden" }} id="lower-site">
            <MainBody />
          </div>
          <Rightsidebar fixed={fixed} />
        </>
      )}
    </div>
  );
};

export default Index;
