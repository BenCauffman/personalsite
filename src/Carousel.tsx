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
    <Stack
      minWidth="50%"
      bg="background: rgb(1,65,31);
    background: linear-gradient(90deg, rgba(1,65,31,1) 0%, rgba(0,93,85,1) 47%, rgba(1,33,58,1) 92%);"
      display="flex"
      alignItems="center"
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
        <Text fontSize="3xl">{active}</Text>
      </Box>
    </Stack>
  );
};

export default Carousel;
