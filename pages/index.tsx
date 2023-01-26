import React, { useContext, useEffect, useState } from "react";
import ProfileLayout from "../src/ProfileLayout";
import MainBody from "../src/MainBody";
import { ResponsiveValue } from "@chakra-ui/react";
import DetailContext from "../src/context";
import Leftsidebar from "../src/Leftsidebar";
import Rightsidebar from "../src/Rightsidebar";

const Index: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const [showInitial, setShowInitial] = useState(true);
  const { setFixed } = useContext(DetailContext);

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
      // setFixed("visible");
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
  }, [toggle, setFixed]);

  return (
    <div>
      {showInitial ? (
        <ProfileLayout toggle={toggle} setToggle={setToggle} />
      ) : null}
      <Leftsidebar />
      <div style={{ display: "none", overflow: "hidden" }} id="lower-site">
        <MainBody />
      </div>
      <Rightsidebar />
    </div>
  );
};

export default Index;
