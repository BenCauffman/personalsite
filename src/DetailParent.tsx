import { useRouter } from "next/router";
import React, { useContext } from "react";
import Carousel from "./Carousel";
import DetailContext from "./context";
import { clickHandle } from "./types";

const DetailParent: React.FC = () => {
  const { active, setActive } = useContext(DetailContext);
  const router = useRouter();

  const clickHandle: clickHandle = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      setActive(e.target.dataset.active!);
      switch (e.target.dataset.active) {
        case "About Me": {
          router.push("/sections/aboutme");
          break;
        }
        case "My Projects": {
          router.push("/sections/projects");
          break;
        }
        case "Contact Me": {
          router.push("/sections/contact");
          break;
        }
        default:
          router.push("/sections/AboutMeSection");
          break;
      }
    }
  };

  return <Carousel click={clickHandle} active={active} />;
};

export default DetailParent;
