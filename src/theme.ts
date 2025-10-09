import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
    config: {
    initialColorMode: "dark",
    useSystemColorMode: false
   },
   styles: {
    global: (props: any) => ({
      html: {
        height: "100%",
        overflowX: "hidden",
      },
    config: {
      initialColorMode: "dark"
   }
      body: {
        height: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        color: "white",
        fontFamily: "Arial, sans-serif",
        bgGradient: mode(
          "linear(to-b, #1D94F0 0%, #1D94F0 78%, #036DC5 100%)",
          "linear(to-b, #1D94F0 0%, #1D94F0 78%, #036DC5 100%)"
        )(props),
      },
      "#root, #app": {
        height: "100%",
      },
      "input::placeholder": {
        color: "white",
      },
    }),
  },
});

export default theme;