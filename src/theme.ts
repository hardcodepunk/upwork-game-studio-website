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
      [`@media (max-width:1150px)`]: {
        fontSize: "130px",
      },
      [`@media (max-width:950px)`]: {
        fontSize: "70px",
      },
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "96px",
      [`@media (max-width:1150px)`]: {
        fontSize: "70px",
      },
      [`@media (max-width:950px)`]: {
        fontSize: "40px",
      },
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
      [`@media (max-width:1150px)`]: {
        fontSize: "22px",
        lineHeight: "auto",
      },
      [`@media (max-width:950px)`]: {
        fontSize: "19px",
        lineHeight: "auto",
      },
    },
  },
})

export default theme
