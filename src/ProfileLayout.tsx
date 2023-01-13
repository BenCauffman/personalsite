import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DetailParent from "./DetailParent";
import MainBody from "./MainBody";

const TITLES = [
  "Full Stack Engineer",
  "Cognitive Scientist",
  "League of Legends Enjoyer",
];

const DETAILS = ["About Me", "My Projects", "Interests", "Yo", "1"];

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
        <DetailParent details={DETAILS} />
      </Box>
      <Box>
        <MainBody />
      </Box>
    </>
  );
};

export default ProfileLayout;
