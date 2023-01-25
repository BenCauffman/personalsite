import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import ben from "../public/site-welcome.png";
import Education from "./Education";
import Interests from "./Interests";
import { clickHandle } from "./types";

const sections = ["Education", "Interests"];

const AboutMe: React.FC = () => {
  const clickHandle: clickHandle = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      const element = document.getElementById(`${e.target.dataset.id}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box marginX="150">
      <Box
        display="flex"
        position="fixed"
        left="1"
        gap="100px"
        flexDirection="column"
      >
        {sections.map((section) => {
          return (
            <Button
              borderRadius="50%"
              height="100"
              key={`${section}`}
              data-id={`${section}`}
              onClick={clickHandle}
            >
              {section}
            </Button>
          );
        })}
      </Box>
      <Box
        marginBottom="300"
        display="flex"
        gap="20px"
        borderRadius="100"
        padding="20"
        justifyContent="center"
      >
        <Text css={{ textAlign: "center" }} fontSize="5xl">
          {" "}
          Welcome to my site
        </Text>
      </Box>
      <Box>
        <Box
          bg="teal"
          height="1000px"
          borderRadius="50%"
          textAlign="center"
          id="Education"
        >
          <Text fontSize="2xl"> Education </Text>
          <Education />
        </Box>
        <Box marginBottom="250" id="Interests">
          <Interests />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
