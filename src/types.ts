import React from "react";

export type clickHandle = (e: React.MouseEvent) => void;

export interface Details {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  section: string[];
  setSection: React.Dispatch<React.SetStateAction<string[]>>;
}
