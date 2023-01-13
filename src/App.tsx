import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import Profile from "./ProfileLayout";
import SectionContext from "./SectionContext";

const App = () => {
  const section = useState(0)

  return (
    <SectionContext.Provider value={section}>
      <ChakraProvider>
        <Profile />
      </ChakraProvider>
    </SectionContext.Provider>
  );
};

export default App;
