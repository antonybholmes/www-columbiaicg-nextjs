import BaseLink from "../buttons/baselink"

const HeaderLink = (props: any) => (
  <BaseLink
    className="header-link"
    activeClassName="header-link-active"
    {...props}
  />
)

export default HeaderLink
