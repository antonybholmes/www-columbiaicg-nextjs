import HeaderLink from "./headerlink"
import Row from "../row"
import useHeaderLinks from "../../hooks/headerlinks"
import FullDiv from "../fulldiv"

const HeaderLinks = () => {
  const links = useHeaderLinks()

  const ret = links.map((link: any, i: number) => {
    return (
      <HeaderLink key={i} aria-label={`Goto ${link.name}`} to={link.link}>
        {link.name}
      </HeaderLink>
    )
  })

  return (
    <FullDiv className="ml-16">
      <Row className="justify-between w-6/10">{ret}</Row>
    </FullDiv>
  )
}

export default HeaderLinks
