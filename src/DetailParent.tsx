import { Box, Button } from "@chakra-ui/react";
import React, { useContext, useReducer, useState } from "react";
import Carousel from "./Carousel";
import DetailContext from "./context";
import { clickHandle } from "./types";

const DetailParent: React.FC = () => {
  const { active, setActive } = useContext(DetailContext);

  const clickHandle: clickHandle = (e) => {
    if (!(e.target instanceof HTMLButtonElement)) return;
    else {
      setActive(e.target.dataset.active!);
    }
  };

  return (
    <Box>
      <Carousel click={clickHandle} active={active} />
    </Box>
  );
};

export default DetailParent;
