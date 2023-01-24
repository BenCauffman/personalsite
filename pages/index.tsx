import { useEffect, useState } from "react";
import ProfileLayout from "../src/ProfileLayout";
import MainBody from "../src/MainBody";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const [toggle, setToggle] = useState(true);
  const [showInitial, setShowInitial] = useState(true);
  const router = useRouter();

  useEffect(() => {
    function makeVisible(el: HTMLElement) {
      el.style.overflow = "visible";
      el.style.display = "block";
      console.log(1);
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      });
    }
    function scrollDown(el: HTMLElement) {
      el.scrollIntoView({ behavior: "smooth" });
      console.log(2);
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 1000);
      });
    }

    function removeTop() {
      setShowInitial(false);
      console.log(3);
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
      {showInitial ? (
        <ProfileLayout toggle={toggle} setToggle={setToggle} />
      ) : null}
      <div style={{ display: "none", overflow: "hidden" }} id="lower-site">
        <MainBody />
      </div>
    </div>
  );
};

export default Index;
