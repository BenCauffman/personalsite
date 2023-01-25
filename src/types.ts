import React from "react";

export type clickHandle = (e: React.MouseEvent) => void;

export interface Details {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  section: string[];
  setSection: React.Dispatch<React.SetStateAction<string[]>>;
  subsection: string[];
  setSubsection: React.Dispatch<React.SetStateAction<string[]>>;
}

export type FlexDirection =
  | "column"
  | "inherit"
  | "-moz-initial"
  | "initial"
  | "revert"
  | "unset"
  | "column-reverse"
  | "row"
  | "row-reverse"
  | undefined;
