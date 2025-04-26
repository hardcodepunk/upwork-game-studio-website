// Next
import Link from "next/link"
import Image from "next/image"

// MUI
import IconButton from "@mui/material/IconButton"

// Properties
import { IconButtonCustomProps } from "./IconButtonCustom.props"

const IconButtonCustom = ({ iconSrc, href, ...props }: IconButtonCustomProps & { href?: string }) => {
  const buttonContent = (
    <IconButton disableRipple color="primary" {...props}>
      {iconSrc ? <Image src={iconSrc} alt={props["aria-label"] || "icon"} width={40} height={40} /> : null}
    </IconButton>
  )

  return href ? (
    <Link href={href} passHref>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  )
}

export default IconButtonCustom
