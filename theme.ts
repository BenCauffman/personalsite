import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // components: {
  //   Button: {
  //     variants: {
  //       home: {
  //         ":hover": {
  //           transform: "translateY(10px)",
  //         },
  //       },
  //     },
  //   },
  // },
  colors: {
    brand: {
      teal: "#005d55",
      darkblue: "#01213a",
      darkgreen: "#01411f",
      lightteal: "#08afa8",
      lightgreen: "#8aed07",
    },
  },
  fonts: {
    heading: "inter",
    body: "inter",
  },
});

export default theme;
