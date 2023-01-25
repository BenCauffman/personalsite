import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useContext, useState } from "react";
import DetailContext from "./context";
import Education from "./Education";
import Interests from "./Interests";
import { clickHandle } from "./types";

const AboutMe: React.FC = () => {
  const { subsection } = useContext(DetailContext);
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
        position="absolute"
        left="1"
        paddingTop="50"
        gap="50px"
        flexDirection="column"
      >
        {subsection.map((section) => {
          return (
            <Button
              borderRadius="20%"
              height="100"
              key={`${section}`}
              data-id={`${section}`}
              onClick={clickHandle}
              bg="brand.light"
              _hover={{ bg: "brand.lightest" }}
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
        textAlign="center"
      >
        <Text fontSize="5xl"> Welcome to my site</Text>
      </Box>
      <Box>
        <Box textAlign="center">
          <Text fontSize="2xl"> Education </Text>
          <Box
            bg="brand.light"
            borderRadius="20%"
            textAlign="center"
            id="Education"
          >
            <Education />
          </Box>
        </Box>
        <Box textAlign="center">
          <Text fontSize="2xl"> Interests </Text>
          <Box
            bg="brand.light"
            borderRadius="20%"
            textAlign="center"
            id="Interests"
          >
            <Interests />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
