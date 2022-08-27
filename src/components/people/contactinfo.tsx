import EmailLink from "../buttons/emaillink"
import PhoneLink from "../buttons/phonelink"
import URLLink, { getUrlLink } from "../buttons/urllink"
import RoomLink from "../buttons/roomlink"
import TwitterLink from "../buttons/twitterlink"
import ColorLink from "../buttons/colorlink"
import GitHubLink from "../buttons/githublink"

type ContactInfoProps = {
  person?: any
  color?: string
  hoverColor?: string
  showIcons?: boolean
  showUrl?: boolean
  showRoom?: boolean
  showPhone?: boolean
  size?: string
  isCentered?: boolean
  className?: string
  twitter?: string
}

const ContactInfo = ({
  person,
  color = "text-slate-500",
  hoverColor = "text-blue-500",
  className,
  showIcons = false,
  showUrl = true,
  showRoom = false,
  showPhone = true,
  isCentered = false,
  size,
  twitter,
}: ContactInfoProps) => {
  if (showIcons) {
    return (
      <ul className={`h-full ${className}`}>
        {person.fields.email && (
          <li>
            <EmailLink
              to={person.fields.email}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {showPhone && person.fields.phone && (
          <li>
            <PhoneLink
              phone={person.fields.phone}
              color={color}
              hoverColor={hoverColor}
            />
          </li>
        )}
        {showRoom && person.fields.room && (
          <li>
            <RoomLink
              room={person.fields.room}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {showUrl && person.fields.url && (
          <li>
            <URLLink
              url={person.fields.url}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {twitter && (
          <li>
            <TwitterLink
              twitter={twitter}
              color={color}
              hoverColor={hoverColor}
            />
          </li>
        )}
        {person.fields.github && (
          <li>
            <GitHubLink
              github={person.fields.github}
              color={color}
              hoverColor={hoverColor}
            />
          </li>
        )}
      </ul>
    )
  } else {
    return (
      <div className={`h-full ${isCentered ? "text-center" : ""} ${className}`}>
        {person.fields.email !== "" && (
          <div className="mt-1">
            <ColorLink
              color="default"
              color2="blue"
              to={`mailto:${person.fields.email}`}
            >
              {person.fields.email}
            </ColorLink>
          </div>
        )}
        {showPhone && person.fields.phone !== "" && (
          <div className="mt-1">
            <ColorLink
              color="default"
              color2="blue"
              to={`tel:${person.fields.phone}`}
            >
              {person.fields.phone}
            </ColorLink>
          </div>
        )}
        {showRoom && person.fields.room !== "" && (
          <div className={`${color} hover:${hoverColor} trans-ani`}>
            Room {person.fields.room}
          </div>
        )}
        {showUrl && person.fields.url && (
          <div className="mt-4">{getUrlLink(person.fields.url)}</div>
        )}
      </div>
    )
  }
}

export default ContactInfo
