import { Box, Button, Stack, Text } from "@chakra-ui/react";
import ben from "../public/site-welcome.png";
import Education from "./Education";
import Interests from "./Interests";
import { clickHandle } from "./types";
import Image from "next/image";
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
      <Box display="flex">
        {sections.map((section) => {
          return (
            <Button
              key={`${section}`}
              data-id={`${section}`}
              onClick={clickHandle}
            >
              {section}
            </Button>
          );
        })}
      </Box>
      <Box marginBottom="300" display="flex" gap="20px">
        <Text fontSize="2xl">
          {" "}
          I am a Full Stack developer currently working on building interesting
          and fun applications and always looking for inspiration for cool stuff
          to build! Take a look around at some of my projects and interests and
          feel free to reach out to me on any of the platforms provided!
        </Text>
        <Box className="boxes">
          <Image className="photo" src={ben} alt="ben" />
        </Box>
      </Box>
      <Box>
        <Box marginBottom="250" id="Education">
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
