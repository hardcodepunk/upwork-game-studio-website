// MUI
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#141414",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "18.5vw",
      fontWeight: 100,
      [`@media (min-width:1450px)`]: {
        fontSize: "287px",
      },
    },
  },
})

export default theme
