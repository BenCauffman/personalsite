import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useReducer, useState } from "react";
import Carousel from "./Carousel";
import SectionContext from "./SectionContext";
import { clickHandle } from "./types";

interface IProps {
  details: string[];
}

const DetailParent: React.FC<IProps> = ({details}) => {
  const [active, setActive] = useContext(SectionContext);

  const clickHandle: clickHandle = (e) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    switch (e.target.dataset.active) {
      case "left": {
        setActive(active - 1 === -1 ? details.length - 1 : active - 1);
        break;
      }
      case "right": {
        setActive(active + 1 === details.length ? 0 : active + 1);
        break;
      }
      case "About Me": {
        setActive(details.indexOf("About Me"))
        break;
      }
      case "Interests": {
        setActive(details.indexOf("Interests"))
        break;
      }
      case "My Projects": {
        console.log('hi')
        setActive(details.indexOf("My Projects"))
        break;
      }
      default:
        break;
    }
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Button data-active="left" onClick={(e) => clickHandle(e)}>
          {" "}
          LEFT
        </Button>
      </Box>
      <Carousel click={clickHandle} details={details} active={active} />
      <Box>
        <Button data-active="right" onClick={(e) => clickHandle(e)}>
          RIGHT
        </Button>
      </Box>
    </Box>
  );
};

export default DetailParent;
