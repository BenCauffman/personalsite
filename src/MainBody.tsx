import { Box } from "@chakra-ui/react";
import { ReactElement, useContext } from "react";
import { Link, Outlet, redirect } from "react-router-dom";
import AboutMe from "./AboutMe";
import BodyCard from "./BodyCard";
import Interests from "./Interests";
import Projects from "./Projects";
import SectionContext from "./SectionContext";

interface IProps {
  details: string[];
}
const MainBody: React.FC<IProps> = ({ details }) => {
  const [active, setActive] = useContext(SectionContext);

  const getCurrentElement = (): ReactElement => {
    if (details[active] === "Interests") {
      return <Interests />;
    } else if (details[active] === "My Projects") {
      return <Projects />;
    } else return <AboutMe />;
  };
  return (
    <>
      <div>Learn More About Me!</div>
      {getCurrentElement()}
    </>
  );
};

export default MainBody;
