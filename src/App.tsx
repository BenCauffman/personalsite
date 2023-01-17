import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import MainBody from "./MainBody";
import ProfileLayout from "./ProfileLayout";
import SectionContext from "./SectionContext";

const DETAILS = ["About Me", "My Projects", "Interests"];

const App = () => {
  const section = useState(0);

  return (
    <SectionContext.Provider value={section}>
      <ChakraProvider>
        <ProfileLayout details={DETAILS}/>
        <MainBody details={DETAILS}/>
      </ChakraProvider>
    </SectionContext.Provider>
  );
};

export default App;
