import { Palette } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    territary: Palette["primary"];
  }
  interface PaletteOptions {
    territary?: PaletteOptions["primary"];
  }
}
