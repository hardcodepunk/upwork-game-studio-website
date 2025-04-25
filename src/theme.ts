// MUI
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#960202",
    },
  },
  typography: {
    fontFamily: "var(--font-bebas), Arial, sans-serif",
    h1: {
      fontFamily: "var(--font-protest)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "173px",
      [`@media (min-width:1450px)`]: {},
    },
  },
})

export default theme
