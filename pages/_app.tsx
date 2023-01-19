import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";
import ProfileLayout from "../src/ProfileLayout";
import DetailContext from "../src/context";
import MainBody from "../src/MainBody";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#F5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [active, setActive] = useState("About Me");
  const [section, setSection] = useState([
    "About Me",
    "My Projects",
    "Contact Me",
  ]);
  return (
    <div>
      <DetailContext.Provider
        value={{ active, setActive, section, setSection }}
      >
        <ChakraProvider theme={theme}>
          <ProfileLayout />
          <MainBody />
        </ChakraProvider>
      </DetailContext.Provider>
    </div>
  );
};

export default App;
