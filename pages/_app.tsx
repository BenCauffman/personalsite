import { ChakraProvider, ResponsiveValue } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useMemo, useState } from "react";
import DetailContext from "../src/context";
import "@fontsource/inter";

import theme from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [active, setActive] = useState("About Me");
  const [section, setSection] = useState([
    "About Me",
    "My Projects",
    "Contact Me",
  ]);
  const [fixed, setFixed] = useState(
    "visible" as ResponsiveValue<Property.ZIndex>
  );
  const providerValue = useMemo(
    () => ({
      active,
      setActive,
      section,
      setSection,
      fixed,
      setFixed,
    }),
    [active, section, fixed]
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
