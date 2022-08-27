import useInfoLinks from "../../hooks/infolinks"
import useCopyright from "../../hooks/copyright"
import ColorLink from "../buttons/colorlink"
import Row from "../row"

const COLOR = "white"

type InfoLinksProps = {
  title: string
}

const InfoLinks = ({ title }: InfoLinksProps) => {
  const links = useInfoLinks()
  const copyright = useCopyright()

  let ret: any[] = []

  // ret.push(
  //   <li key={0} className="md:inline mb-2 md:mb-0">
  //     <ColorLink color={COLOR} to="/">{copyright}</ColorLink>
  //   </li>
  // )

  links.map((link: any, index: number) => {
    ret.push(
      <li key={index + 1} className={`md:inline mb-2 md:mb-0 md:ml-8`}>
        <ColorLink
          color={COLOR}
          aria-label={`Goto ${link.name}`}
          to={link.link}
        >
          {link.name}
        </ColorLink>
      </li>
    )
  })

  // ret.push(
  //   <li key={0} className="md:inline mb-2">
  //     <ColorLink color={COLOR} to="/">
  //       {copyright}
  //     </ColorLink>
  //   </li>
  // )

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <ColorLink color={COLOR} to="/" className="mb-4">
        {copyright}
      </ColorLink>

      <ul className="sm:inline">{ret}</ul>
    </div>
  )
}

export default InfoLinks
