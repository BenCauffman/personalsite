import { ChakraProvider, ResponsiveValue } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
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
  const [margin, setMargin] = useState("150");
  const providerValue = useMemo(
    () => ({
      active,
      setActive,
      section,
      setSection,
      fixed,
      setFixed,
      margin,
      setMargin,
    }),
    [active, section, fixed, margin]
  );

  const handleResize = () => {
    if (window.innerWidth <= 750) {
      setFixed("hidden");
      setMargin("0");
    } else {
      setFixed("visible");
      setMargin("150");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

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
