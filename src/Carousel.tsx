import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import DetailContext from "./context";
import { clickHandle } from "./types";

interface IProps {
  active: string;
  click: clickHandle;
}

const Carousel: React.FC<IProps> = ({ active, click }) => {
  const { section } = useContext(DetailContext);

  return (
    <Stack minWidth="50%" bg="teal" display="flex" alignItems="center">
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
        <Text fontSize="3xl">{active}</Text>
      </Box>
    </Stack>
  );
};

export default Carousel;
