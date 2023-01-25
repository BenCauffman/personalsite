import { createContext } from "react";
import { Details } from "./types";

const DetailContext = createContext<Details>({
  active: "hi",
  setActive: () => {},
  section: ["hi"],
  setSection: () => {},
  subsection: ["hi"],
  setSubsection: () => {},
});

export default DetailContext;
