import IconLink from "./iconlink"
import BlueLink from "./bluelink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers } from "@fortawesome/free-solid-svg-icons"

const MembersLink = ({ to }) => (
  <IconLink
    icon={
      <FontAwesomeIcon icon={faUsers} className={`text-${color} text-xl`} />
    }
    content={<BlueLink to={to}>View Lab Members</BlueLink>}
  />
)

export default MembersLink
