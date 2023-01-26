import { ResponsiveValue } from "@chakra-ui/react";
import React from "react";

export type clickHandle = (e: React.MouseEvent) => void;

export interface Details {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  section: string[];
  setSection: React.Dispatch<React.SetStateAction<string[]>>;
  fixed: ResponsiveValue<Position>;
  setFixed: React.Dispatch<React.SetStateAction<ResponsiveValue<Position>>>;
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
