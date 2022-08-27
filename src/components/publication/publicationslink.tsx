import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import IconLink from "../buttons/iconlink"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"

type PublicationsLinkProps = {
  to: string
  color?: string
}

const PublicationsLink = ({ to, color = "black" }: PublicationsLinkProps) => (
  <IconLink
    to={to}
    icon={
      <FontAwesomeIcon icon={faNewspaper} className={`text-${color} text-xl`} />
    }
  >
    View Publications
  </IconLink>
)

export default PublicationsLink
