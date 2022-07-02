import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const useUrlLink = (url: string): Array<string> => {
  const tokens = url.split("::")

  let text
  let to

  if (tokens.length > 1) {
    text = tokens[0]
    to = tokens[1]
  } else {
    text = tokens[0]
    to = tokens[0]
  }

  return [text, to]
}

type URLLinkProps = {
  url: string
  color?: string
  hoverColor?: string
  size?: string
}

const URLLink: React.FC<URLLinkProps> = ({ url, color, hoverColor, size }) => {
  const [text, to] = useUrlLink(url)

  return (
    <IconLink
      name="Lab Web Site"
      to={to}
      icon={<FontAwesomeIcon icon="link" className={`${size}`} />}
      content={text}
      color={color}
      hoverColor={hoverColor}
    />
  )
}

URLLink.defaultProps = {
  color: "text-slate-500",
  hoverColor: "text-blue-500",
  size: "text-xl",
}

export default URLLink
