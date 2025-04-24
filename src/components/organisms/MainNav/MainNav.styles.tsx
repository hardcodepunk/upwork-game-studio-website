"use client"

// MUI
import { styled } from "@mui/material"

export const StyledMainNav = styled("div")(({ theme }) => ({
  display: "flex",
  background: theme.palette.primary.main,
  boxShadow: "none",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "35px 0",
}))

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  maxWidth: "1200px",
  justifyContent: "space-between",
  padding: "0 5%",
  margin: "0 auto",
  flex: 1,
}))
