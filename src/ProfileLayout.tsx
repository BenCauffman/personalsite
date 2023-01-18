import { Box, interactivity, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DetailParent from "./DetailParent";

const TITLES = [
  "Full Stack Engineer",
  "Cognitive Scientist",
  "League of Legends Enjoyer",
];


const ProfileLayout: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === TITLES.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <>
      <Box
        textAlign="center"
        bg="tomato"
        position="fixed"
        top="0"
        h="200px"
        w="100vw"
      >
        <Text fontSize="5xl">Benjamin Cauffman</Text>
        <Text fontSize="3xl">{TITLES[index]}</Text>
      </Box>
      <Box position="relative" marginTop="200px" bg="yellow">
        <DetailParent />
      </Box>
    </>
  );
};

export default ProfileLayout;
