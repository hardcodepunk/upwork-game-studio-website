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
    h2: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "96px",
      lineHeight: "115px",
    },
    h3: {
      fontFamily: "var(--font-protest)",
      fontStyle: "normal",
      fontWeight: "400",
      textTransform: "uppercase",
      fontSize: "50px",
      marginBottom: "40px",
    },
    h4: {
      fontFamily: "var(--font-protest)",
      fontStyle: "normal",
      fontWeight: "400",
      textTransform: "uppercase",
      fontSize: "34px",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: "400",
      textTransform: "uppercase",
      fontSize: "18px",
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "28px",
      lineHeight: "34px",
    },
  },
})

export default theme
