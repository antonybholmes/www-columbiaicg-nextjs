import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const getUrlLink = (url: string): string[] => {
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

const URLLink = ({
  url,
  color = "text-slate-500",
  hoverColor = "text-blue-500",
  size = "text-xl",
}: URLLinkProps) => {
  const [text, to] = getUrlLink(url)

  return (
    <IconLink
      to={to}
      icon={<FontAwesomeIcon icon="link" className={`${size}`} />}
      color={color}
      hoverColor={hoverColor}
    >
      {text}
    </IconLink>
  )
}

export default URLLink
