import { createContext } from "react";

const SectionContext =
  createContext<[number, (section: number) => void]>([
    0, () => {}
  ]);

export default SectionContext;
