import { ChakraProvider } from "@chakra-ui/react";
import { useState } from "react";
import MainBody from "./MainBody";
import ProfileLayout from "./ProfileLayout";
import DetailContext from "./context";


const App: React.FC = () => {
  const [active, setActive] = useState('About Me');
  const [section, setSection] = useState(["About Me", "My Projects", "Interests"]);
  return (
    <div>
      <DetailContext.Provider value={{active, setActive, section, setSection}}>
        <ChakraProvider>
          <ProfileLayout />
          <MainBody />
        </ChakraProvider>
      </DetailContext.Provider>
    </div>
  );
};

export default App;
