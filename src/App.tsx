import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import MainBody from "./MainBody";
import ProfileLayout from "./ProfileLayout";
import SectionContext from "./SectionContext";

const DETAILS = ["About Me", "My Projects", "Interests"];

const App: React.FC = () => {
  const active = useState(0);
  return (
    <div>
      <SectionContext.Provider value={active}>
        <ChakraProvider>
          <ProfileLayout details={DETAILS} />
          <MainBody details={DETAILS} />
        </ChakraProvider>
      </SectionContext.Provider>
    </div>
  );
};

export default App;
