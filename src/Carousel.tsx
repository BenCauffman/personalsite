import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import DetailContext from "./context";
import { clickHandle } from "./types";

interface IProps {
  active: string;
  click: clickHandle;
}

const Carousel: React.FC<IProps> = ({ active, click }) => {
  const { section } = useContext(DetailContext);
  const [brand] = useState("brand");

  return (
    <Stack
      minWidth="50%"
      display="flex"
      alignItems="end"
      paddingRight="60px"
      borderBottom="1px solid white"
    >
      <Box display="flex" gap="20px">
        {section.map((detail, index) => {
          return (
            <Button
              bg="yellow.500"
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
        <Text color={`${brand}.lightest`} fontSize="3xl">
          {active}
        </Text>
      </Box>
    </Stack>
  );
};

export default Carousel;
