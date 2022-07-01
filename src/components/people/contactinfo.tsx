import React from "react"
import EmailLink from "../buttons/emaillink"
import PhoneLink from "../buttons/phonelink"
import URLLink, { useUrlLink } from "../buttons/urllink"
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

const ContactInfo: React.FC<ContactInfoProps> = ({
  person,
  color,
  hoverColor,
  className,
  showIcons,
  showUrl,
  showRoom,
  showPhone,
  isCentered,
  size,
  twitter,
}) => {
  if (showIcons) {
    return (
      <ul className={`h-full ${className}`}>
        {person.frontmatter.email !== "" && (
          <li>
            <EmailLink
              to={person.frontmatter.email}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {showPhone && person.frontmatter.phone !== "" && (
          <li>
            <PhoneLink
              phone={person.frontmatter.phone}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {showRoom && person.frontmatter.room !== "" && (
          <li>
            <RoomLink
              room={person.frontmatter.room}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {showUrl && person.frontmatter.url !== null && (
          <li>
            <URLLink
              url={person.frontmatter.url}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {twitter !== null && (
          <li>
            <TwitterLink
              twitter={twitter}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
        {person.frontmatter.github !== null && (
          <li>
            <GitHubLink
              github={person.frontmatter.github}
              color={color}
              hoverColor={hoverColor}
              size={size}
            />
          </li>
        )}
      </ul>
    )
  } else {
    return (
      <div className={`h-full ${isCentered ? "text-center" : ""} ${className}`}>
        {person.frontmatter.email !== "" && (
          <div className="mt-1">
            <ColorLink
              color="default"
              color2="blue"
              to={`mailto:${person.frontmatter.email}`}
            >
              {person.frontmatter.email}
            </ColorLink>
          </div>
        )}
        {showPhone && person.frontmatter.phone !== "" && (
          <div className="mt-1">
            <ColorLink
              color="default"
              color2="blue"
              to={`tel:${person.frontmatter.phone}`}
            >
              {person.frontmatter.phone}
            </ColorLink>
          </div>
        )}
        {showRoom && person.frontmatter.room !== "" && (
          <div className={`${color} hover:${hoverColor} trans-ani`}>
            Room {person.frontmatter.room}
          </div>
        )}
        {showUrl && person.frontmatter.url !== null && (
          <div className="mt-4">{useUrlLink(person.frontmatter.url)}</div>
        )}
      </div>
    )
  }
}

ContactInfo.defaultProps = {
  className: "",
  color: "text-gray-500",
  hoverColor: "text-blue-500",
  size: "text-base",
  showIcons: false,
  showUrl: true,
  showRoom: false,
  showPhone: true,
  isCentered: false,
  twitter: null,
}

export default ContactInfo
