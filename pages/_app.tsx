import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import ProfileLayout from "../src/ProfileLayout";
import DetailContext from "../src/context";
import MainBody from "../src/MainBody";
import { Details } from "../src/types";
import "../styles/styles.css";

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
  const providerValue = useMemo(
    () => ({
      active,
      setActive,
      section,
      setSection,
    }),
    [active, section]
  );
  const [toggle, setToggle] = useState(true);
  const [showInitial, setShowInitial] = useState(true);

  useEffect(() => {
    function makeVisible(el: HTMLElement) {
      el.style.overflow = "visible";
      el.style.display = "block";
      console.log(1);
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      });
    }
    function scrollDown(el: HTMLElement) {
      el.scrollIntoView({ behavior: "smooth" });
      console.log(2);
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 1000);
      });
    }

    function removeTop() {
      setShowInitial(false);
      console.log(3);
      return new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      });
    }
    const element = document.getElementById("lower-site")!;

    if (!toggle) {
      new Promise((resolve) => {
        setTimeout(() => resolve(1), 500);
      })
        .then(() => makeVisible(element))
        .then(() => scrollDown(element))
        .then(() => removeTop());
    }
  }, [toggle]);

  return (
    <div>
      <DetailContext.Provider value={providerValue}>
        <ChakraProvider theme={theme}>
          {showInitial ? (
            <ProfileLayout toggle={toggle} setToggle={setToggle} />
          ) : null}
          <div style={{ display: "none", overflow: "hidden" }} id="lower-site">
            <MainBody />
          </div>
        </ChakraProvider>
      </DetailContext.Provider>
    </div>
  );
};

export default App;
