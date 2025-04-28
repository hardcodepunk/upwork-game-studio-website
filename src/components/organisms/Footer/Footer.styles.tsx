"use client"

// MUI
import { styled } from "@mui/material"

export const StyledFooter = styled("div")(({ theme }) => ({
  display: "flex",
  background: theme.palette.primary.main,
  boxShadow: "none",
  width: "100%",
  padding: "35px 0",
}))

export const StyledWrapper = styled("div")(() => ({
  display: "flex",
  maxWidth: "100%",
  justifyContent: "space-between",
  flex: 1,
}))
