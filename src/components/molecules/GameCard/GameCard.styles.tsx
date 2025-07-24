import { styled } from "@mui/material/styles"

export const StyledCardWrapper = styled("div")<{ backgroundImage?: string }>(({ backgroundImage }) => ({
  position: "relative",
  width: "160px",
  aspectRatio: "1 / 1",
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
  overflow: "hidden",
  zIndex: 1,
}))

export const StyledOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 2,
})

export const StyledCardBorder = styled("div")<{ active?: boolean }>(({ active, theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  border: `4px solid ${active ? theme.palette.secondary.main : "#fff"}`,
  borderRadius: "8px",
  boxSizing: "border-box",
  zIndex: 3,
}))

export const StyledCardContent = styled("div")({
  position: "relative",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  zIndex: 3,
})

export const StyledCardTitle = styled("span")<{ active?: boolean }>(({ theme, active }) => ({
  fontFamily: "var(--font-bebas), Arial, sans-serif",
  fontWeight: 800,
  fontSize: "20px",
  textTransform: "uppercase",
  color: active ? theme.palette.secondary.main : "#fff",
}))

export const StyledComingSoon = styled("span")(() => ({
  fontSize: "14px",
  fontWeight: 600,
  alignSelf: "flex-start",
  marginTop: "auto",
  fontFamily: "var(--font-bebas), Arial, sans-serif",
}))
