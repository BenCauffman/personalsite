import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { clickHandle } from "./types";
import NextImage from 'next/image'


const Interests: React.FC = () => {
  return (
    <>
      <Stack direction="row" gap="20px">
        <Stack gap="20px">
          <Text fontSize="2xl">
            {" "}
            When I am not building new tools and projects, you will
            realistically still find me at my computer (heh) in a new café,
            traveling around to visit friends / family, or listening to Bo
            Burnham's "Inside" for the 100th time
          </Text>
          <Text fontSize="2xl"></Text>
        </Stack>
      </Stack>
    </>
  );
};

export default Interests;
