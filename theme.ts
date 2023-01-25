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
      darkest: "#00312e",
      darker: "#066255",
      normal: "#039f9b",
      light: "#e090ad",
      lightest: "#fad3d8",
    },
    brand2: {
      darkest: "#053f43",
      darker: "#006a5c",
      normal: "#02ab82",
      light: "#61bf9a",
      lightest: "#eee296",
    },
    brand3: {
      darkest: "#23383b",
      darker: "#246068",
      normal: "#3aa1aa",
      light: "#e29000",
      lightest: "#fadb67",
    },
  },
  fonts: {
    heading: "inter",
    body: "inter",
  },
});

export default theme;
