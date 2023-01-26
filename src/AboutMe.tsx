import { Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useContext, useState } from "react";
import DetailContext from "./context";
import Education from "./Education";
import Interests from "./Interests";
import Me from "./Me";
import { clickHandle } from "./types";
import ben from "../public/site-welcome.png";

const AboutMe: React.FC = () => {
  const { margin } = useContext(DetailContext);
  const clickHandle: clickHandle = (e) => {
    if (e.target instanceof HTMLButtonElement) {
      const element = document.getElementById(`${e.target.dataset.id}`);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box marginX={margin}>
      <Box
        display="flex"
        gap="20px"
        borderRadius="100"
        padding="20"
        justifyContent="center"
        textAlign="center"
      >
        <Text fontWeight="bold" fontSize="50px">
          {" "}
          Welcome!
        </Text>
      </Box>
      <Stack>
        <Box
          display="flex"
          padding="20px"
          borderRadius="20px"
          textAlign="center"
          id="top"
        >
          <Stack justifyContent="center" padding="20px">
            <Text
              paddingX="10px"
              fontSize={{
                sm: "18px",
                md: "24px",
                lg: "30px",
              }}
            >
              {" "}
              I am a full stack developer who is passionate about how the
              internet works and building pretty nifty things
            </Text>
          </Stack>
          <Box
            borderRadius="10"
            bg="brand.darkest"
            boxShadow="inner"
            maxWidth="300"
            minWidth="150"
            height="auto"
          >
            <Image src={ben} alt="ben" />
          </Box>
        </Box>
        {/* <Box justifyContent="center" display="flex" gap="50px">
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
        </Box> */}
        <Stack paddingTop="50px" gap="200px">
          <Box textAlign="left">
            <Text
              fontSize={{
                sm: "18px",
                lg: "30px",
              }}
            >
              {" "}
              Education{" "}
            </Text>
            <Box
              bg="brand.light"
              paddingY="20px"
              borderRadius="20px"
              textAlign="left"
              id="Education"
              width="80%"
              color="brand.darkest"
              fontSize={{
                sm: "16px",
                md: "18px",
                lg: "20px",
              }}
            >
              <Education />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            alignItems="flex-end"
          >
            <Text
              fontSize={{
                sm: "18px",
                lg: "30px",
              }}
            >
              {" "}
              Interests{" "}
            </Text>
            <Box
              bg="brand.light"
              padding="20px"
              borderRadius="20px"
              textAlign="right"
              id="Interests"
              width="80%"
              color="brand.darkest"
              fontSize={{
                sm: "16px",
                md: "18px",
                lg: "20px",
              }}
            >
              <Interests />
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AboutMe;
