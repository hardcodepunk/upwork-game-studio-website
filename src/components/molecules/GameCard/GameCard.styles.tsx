import { styled } from "@mui/material/styles"

export const StyledCardWrapper = styled("div")({
  position: "relative",
  width: "160px",
  aspectRatio: "1 / 1",
  flexShrink: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
})

export const StyledCardBorder = styled("div")<{ active?: boolean }>(({ active, theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: `2px solid ${active ? theme.palette.secondary.main : "#fff"}`,
  borderRadius: "8px",
  boxSizing: "border-box",
}))

export const StyledCardTitle = styled("span")<{ active?: boolean }>(({ theme, active }) => ({
  fontFamily: "var(--font-protest), Arial, sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  fontSize: "14px",
  color: active ? theme.palette.secondary.main : "#fff",
  zIndex: 1,
  marginBottom: "0.5rem",
}))
