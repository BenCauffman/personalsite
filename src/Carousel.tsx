import { Box, Button, NumberInputStepper, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import DetailContext, { SectionContext } from "./context";
import { clickHandle } from "./types";

interface IProps {
  active: string;
  click: clickHandle;
}

const Carousel: React.FC<IProps> = ({ active, click }) => {
  const { section } = useContext(DetailContext);

  return (
    <Stack minWidth="50%" bg="pink" display="flex" alignItems="center">
      <Box display="flex" gap="20px">
        {section.map((detail, index) => {
          return (
            <Button
              onClick={(e) => click(e)}
              data-active={detail}
              key={`${index}-${detail}`}
            >
              {detail}
            </Button>
          );
        })}
      </Box>
      <Box>
        <Text fontSize="3xl">{active}</Text>
      </Box>
    </Stack>
  );
};

export default Carousel;
