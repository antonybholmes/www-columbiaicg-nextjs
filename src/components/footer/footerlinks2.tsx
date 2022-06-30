import React from "react"
import useFooterLinks2 from "../../hooks/footerlinks2"
import ColorLink from "../buttons/colorlink"

const FooterLinks2 = () => {
  const links = useFooterLinks2()

  const ret: Array<any> = links.map((link: any, index: number) => {
    return (
      <li className="mb-2" key={index}>
        <ColorLink
          color="white"
          aria-label={`Goto ${link.name}`}
          to={link.link}
        >
          {link.name}
        </ColorLink>
      </li>
    )
  })

  return <ul>{ret}</ul>
}

export default FooterLinks2
