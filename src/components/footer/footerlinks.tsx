import React from "react"
import WhiteLink from "../buttons/whitelink"
import useFooterLinks from "../../hooks/footerlinks"
import ColorLink from "../buttons/colorlink"
import { SHARED_INSTRUMENT_LINK } from "../../constants"

const FooterLinks = () => {
  const links = useFooterLinks()

  const ret = links.map((link: any, index: number) => {
    return (
      <li className="mb-2" key={index}>
        <WhiteLink aria-label={`Goto ${link.name}`} to={link.link}>
          {link.name}
        </WhiteLink>
      </li>
    )
  })

  ret.push(
    <li className="mb-2" key="booking">
      <ColorLink
        color="white"
        aria-label={`Goto Booking`}
        to={SHARED_INSTRUMENT_LINK}
      >
        Booking
      </ColorLink>
    </li>
  )

  return <ul className="mb-8">{ret}</ul>
}

export default FooterLinks
