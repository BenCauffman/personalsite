import { Box, Image, Stack, Text } from "@chakra-ui/react";
import { ReactElement, useContext } from "react";
import AboutMe from "./AboutMe";
import Interests from "./Interests";
import Projects from "./Projects";
import DetailContext from "./context";
import ben from "../public/images/site-welcome.png";

const MainBody: React.FC = () => {
  const { active } = useContext(DetailContext);

  const getCurrentElement = (): ReactElement => {
    if (active === "Interests") {
      return <Interests />;
    } else if (active === "My Projects") {
      return <Projects />;
    } else return <AboutMe />;
  };
  return (
    <>
      <Text marginY="20px" fontSize="2xl">
        Hi! My name is Ben and welcome to my website.{" "}
      </Text>
      {getCurrentElement()}
    </>
  );
};

export default MainBody;
