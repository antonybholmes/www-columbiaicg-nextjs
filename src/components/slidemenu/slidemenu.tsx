import React from "react"
import SlideMenuContainer from "./slidemenucontainer"

type SlideMenuProps = {
  visible?: boolean
  onSlideMenuClick?: any
}

const SlideMenu: React.FC<SlideMenuProps> = ({ visible, onSlideMenuClick }) => (
  <>
    {/* <SlideMenuButton onClick={menuClickHandle} /> */}
    {/* <SlideMenuCanvas onClick={onSlideMenuClick} visible={visible} /> */}
    <SlideMenuContainer onClick={onSlideMenuClick} visible={visible} />
  </>
)

SlideMenu.defaultProps = {
  onSlideMenuClick: null,
  visible: false,
}

export default SlideMenu
