import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useMemo, useState } from "react";
import DetailContext from "../src/context";
import DetailParent from "../src/DetailParent";

import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [active, setActive] = useState("About Me");
  const [section, setSection] = useState([
    "About Me",
    "My Projects",
    "Contact Me",
  ]);
  const providerValue = useMemo(
    () => ({
      active,
      setActive,
      section,
      setSection,
    }),
    [active, section]
  );

  return (
    <div>
      <DetailContext.Provider value={providerValue}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </DetailContext.Provider>
    </div>
  );
};

export default App;
