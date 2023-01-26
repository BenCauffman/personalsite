import { createContext } from "react";
import { Details } from "./types";

const DetailContext = createContext<Details>({
  active: "hi",
  setActive: () => {},
  section: ["hi"],
  setSection: () => {},
  fixed: "hidden",
  setFixed: () => {},
  margin: "150",
  setMargin: () => {}
});

export default DetailContext;
