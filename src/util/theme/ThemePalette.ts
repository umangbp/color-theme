import { PaletteOptions } from "@mui/material/styles/createPalette";
import { teal, orange, ocean } from "./colors";

export const palette: PaletteOptions = {
  primary: {
    main: teal[600],
    dark: teal[700],
    light: teal[500],
    ...teal,
  },
  secondary: {
    main: orange[600],
    dark: orange[700],
    light: orange[500],
    ...orange,
  },
  territary: {
    main: ocean[600],
    dark: ocean[700],
    light: ocean[500],
    ...ocean,
  },
};
