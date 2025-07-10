import { createTheme, Loader } from "@mantine/core";
import DefaultLoader from "../../components/loader/DefaultLoader";

/* 
A Crimson theme for the application.

@author: IFD
*/
export const defaultTheme = createTheme({
  //! APP COLORS

  // Primary color
  primaryColor: "primary",

  // Color scheme
  colors: {
    primary: [
      "#ffe7e9",
      "#ffced0",
      "#ff9b9f",
      "#ff646a",
      "#fe373d",
      "#fe1b21",
      "#ff0009",
      "#e40007",
      "#cb0004",
      "#b20000",
    ],
    secondary: [
      "#fff3e1",
      "#ffe6cc",
      "#ffcc9a",
      "#ffb164",
      "#fe9937",
      "#fe8a1a",
      "#ff7e00",
      "#e37000",
      "#cb6200",
      "#b15300",
    ],
    tertiary: [
      "#fffde1",
      "#fff9cb",
      "#fff29a",
      "#ffea64",
      "#ffe438",
      "#ffe01d",
      "#ffdd00",
      "#e3c500",
      "#caaf00",
      "#ae9600",
    ],
  },

  // Default black color
  black: "#0B1215",

  // Default white color
  white: "#F8F8FF",

  //! COLOR SETTINGS

  // The primary color shade to use
  primaryShade: 6,

  // Disable auto contrast for all components
  autoContrast: true,

  // The threshold to use for luminance-based color scheme switching
  // will switch text color to black if the luminance of the background
  // color is above this value
  luminanceThreshold: 0.5,

  //! APP BREKPOINTS

  // App breakpoints
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },

  //! APP LOOK AND FEEL

  // Shows a focus ring on elements when they are focused
  focusRing: "auto",

  // Default radius for components
  defaultRadius: "md",

  // Radius sizes
  radius: {
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    xxl: "1rem",
  },

  defaultGradient: {
    from: "primary",
    to: "secondary",
    deg: 45,
  },

  // Cursor style for all components
  cursorType: "pointer",

  // Shadow style for all components
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 1px 5px rgba(0, 0, 0, 0.15)",
    lg: "0 1px 10px rgba(0, 0, 0, 0.2)",
    xl: "0 1px 20px rgba(0, 0, 0, 0.25)",
  },

  // Scale factor for all components
  scale: 1,

  //! COMPONENT SETTINGS

  components: {
    // Override loader styles
    Loader: {
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: DefaultLoader },
        type: "custom",
      },
    },
  },

  //! FONT SETTINGS

  // Enable font smoothing
  fontSmoothing: true,

  // Font family for all components
  fontFamily:
    "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",

  // Font family for headings
  headings: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
  },
});
