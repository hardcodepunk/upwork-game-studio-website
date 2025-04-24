"use client"

// MUI
import { AppBar, AppBarProps, styled } from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
}))
