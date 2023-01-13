import { Box, Button, NumberInputStepper, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { clickHandle } from "./types";

interface IProps {
  active: number;
  details: string[];
  click: clickHandle;
}

const Carousel: React.FC<IProps> = ({ active, details, click }) => {

  return (
    <Stack minWidth='50%' bg="pink" display="flex" alignItems="center">
      <Box display='flex' gap='20px'>
        {details.map((detail, index) => {
          if (index !== active) {
            return (
              <Button onClick={(e) => click(e)} data-active={detail} key={`${index}-${detail}`}>
                {detail}
              </Button>
            );
          }
        })}
      </Box>
      <Box>
        <Text fontSize="3xl">{details[active]}</Text>
      </Box>
    </Stack>
  );
};

export default Carousel;
