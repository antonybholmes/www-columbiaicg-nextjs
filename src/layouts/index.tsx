/**
 * CrumbLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faHome,
  faCheck,
  faMapMarkerAlt,
  faPhone,
  faDoorOpen,
  faSearch,
  faTimes,
  faBars,
  faNewspaper,
  faExternalLinkAlt,
  faGlobeAmericas,
  faUsers,
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faLink,
  faCaretUp,
  faCaretDown,
  faChevronLeft,
  faAngleRight,
  fas,
  faTags,
} from "@fortawesome/free-solid-svg-icons"
import {
  faClock,
  faCalendar,
  faCalendarAlt,
  faEnvelope,
  faUser,
  far,
} from "@fortawesome/free-regular-svg-icons"
import CookieConsent from "react-cookie-consent"
import WhiteLink from "../components/buttons/whitelink"
import Header from "../components/header/header"
import Transition from "../components/transition"
import SlideMenu from "../components/slidemenu/slidemenu"
import Footer from "../components/footer/footer"

library.add(
  fab,
  fas,
  far,
  faHome,
  faClock,
  faMapMarkerAlt,
  faCheck,
  faPhone,
  faEnvelope,
  faDoorOpen,
  faSearch,
  faTimes,
  faBars,
  faNewspaper,
  faExternalLinkAlt,
  faGlobeAmericas,
  faUsers,
  faChevronUp,
  faChevronDown,
  faCalendar,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
  faCaretUp,
  faCaretDown,
  faLink,
  faCheck,
  faAngleRight,
  faUser,
  faTags
)

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]', { speed: 500 })
}

// export const ACTION_MENU_VISIBLE = 'MENU_VISIBLE'

// export const menuVisibleAction = (visible) => {
//   return { type: ACTION_MENU_VISIBLE, visible }
// }

// const INITIAL_STATE = {
//   menuVisible: false
// }

// const updateState = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case ACTION_MENU_VISIBLE:
//       return Object.assign({}, state, {
//         menuVisible: action.visible
//       })
//     default:
//       return state
//   }
// }

// const store = createStore(updateState)

// Log the initial state

type LayoutProps = {
  location: any
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const handleMenuButtonClick = (e: any) => {
    setMenuVisible(true)
  }

  const handleSlideMenuClick = (e: any) => {
    setMenuVisible(false)
  }

  return (
    <div className="relative">
      {/* <p>Path is {location.pathname}</p> */}

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-tagmanager"
        contentStyle={{ fontSize: "smaller" }}
        buttonStyle={{
          background: "rgba(29, 79, 145, 0)",
          fontSize: "smaller",
          border: "solid 1px white",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          color: "white",
        }}
        declineButtonStyle={{
          background: "rgba(29, 79, 145, 0)",
          fontSize: "smaller",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          color: "white",
        }}
        style={{ background: "rgba(108, 173, 223, 0.95)" }}
        enableDeclineButton={true}
        flipButtons={true}
      >
        This website uses cookies and similar tools and technologies to
        understand visitors’ experiences. By continuing to use this website, you
        consent to the usage of cookies and similar technologies. We value your
        privacy and minimize the amount of data we collect. You can read our
        privacy policy <WhiteLink to="/privacy">here</WhiteLink>.
      </CookieConsent>

      <SlideMenu
        visible={menuVisible}
        onSlideMenuClick={handleSlideMenuClick}
      />

      <Header
        location={location}
        onMenuButtonClick={handleMenuButtonClick}
        menuVisible={menuVisible}
      />

      <Transition location={location}>
        <main>{children}</main>
      </Transition>

      <Footer />
    </div>
  )
}

export default Layout
