import React from "react"
import FooterLinks from "./footerlinks"
import Container from "../container"
// import crownsvg from "../../../assets/images/svg/crown-white-bg.svg"
import Row from "../row"
import InfoLinks from "./infolinks"
import FooterLinks2 from "./footerlinks2"
import HideSmall from "../hidesmall"
import BaseLink from "../buttons/baselink"
import { SITE_TITLE } from "../../constants"

// const CrownDiv = styled.div`
//   background-image: url(${crownsvg});
//   background-size: auto 150%;
//   background-repeat: no-repeat;
//   background-position: right -4rem top 2rem;
// `

// const InfoDiv = styled.div`
//   position: relative;
//   overflow: hidden;
//   &:before {
//     content: "";
//     position: absolute;
//     top: -10px;
//     left: 0;
//     width: 100%;
//     height: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
//     z-index: 100;
//   }
// `

type FooterProps = {
  crumbs?: Array<[string, string]>
}

const Footer: React.FC<FooterProps> = ({ crumbs }) => {

  return (
    <footer className="text-white bg-cuimc-blue pt-16 lg:pt-32 pb-16">
      <div>
        <Container>
          {/* <Breadcrumb crumbs={crumbs} className="mb-16" /> */}

          {/* <ShowSmall size="xl" className="py-4">
            <ColorLink to="https://www.cuimc.columbia.edu/" underline={false}>
              <img
                src={cuimc-svg}
                className="h-16 opacity-100 hover:opacity-80 trans-ani"
                alt="CUIMC Logo"
              />
            </ColorLink>
          </ShowSmall> */}
          {/* <ul className="inline">
            <li className="inline">
              <ExtLink to="https://columbia.edu">
                <img
                  src={columbiasvg}
                  className="h-14 opacity-80 hover:opacity-100 trans-ani mb-4 md:mb-0 md:inline mr-16"
                  alt="Columbia Logo"
                />
              </ExtLink>
            </li>
            <li className="inline">
              <ExtLink to="https://www.cuimc.columbia.edu/">
                <img
                  src={cuimc-svg}
                  className="h-14 opacity-80 hover:opacity-100 trans-ani md:inline"
                  alt="CUIMC Logo"
                />
              </ExtLink>
            </li>
          </ul> */}

          {/* <Row className="w-full">
            <div className="w-3/4 md:w-1/2 2xl:w-3/10">
              <Link to="https://www.cuimc.columbia.edu/">
                <img
                  src={cuimc-whitesvg}
                  className="opacity-100 hover:opacity-80 trans-ani w-full"
                  alt="CUIMC Logo"
                />
              </Link>
            </div>
          </Row> */}

          <Row
            wrap={true}
            isVCentered={false}
            className="text-sm w-full justify-between"
          >
            <Row
              isVCentered={false}
              className="w-full lg:w-1/2 2xl:w-1/3 justify-between"
            >
              <div>
                <FooterLinks />
              </div>
              <div>
                <FooterLinks2 />
              </div>
            </Row>

            <HideSmall size="lg" className="mt-8 lg:mt-0">
              <div>
                <div className="font-medium">Copyright &copy; {SITE_TITLE}</div>
                {/* <div className="text-xl font-medium">
                Columbia University
              </div> */}
                <div>1130 St Nicholas Ave</div>
                <div>New York, NY 10032</div>
                <div>United States</div>
              </div>

              {/* <div className="w-full sm:w-2/3 lg:w-full mt-8 lg:mt-16">
                <Link to="https://www.cuimc.columbia.edu/">
                  <img
                    src={cuimc-whitesvg}
                    className="opacity-100 hover:opacity-80 trans-ani w-full"
                    alt="CUIMC Logo"
                  />
                </Link>
              </div> */}
            </HideSmall>
          </Row>

          <Row className="w-full mt-8 lg:mt-16">
            <div className="w-9/10 sm:w-7/10 md:w-1/2 2xl:w-3/10">
              <BaseLink to="https://www.cuimc.columbia.edu/">
                <img
                  src={"../../../assets/images/svg/cuimc-white.svg"}
                  className="opacity-90 hover:opacity-100 trans-ani w-full"
                  alt="CUIMC logo"
                />
              </BaseLink>
            </div>
          </Row>

          <div className="text-xs mt-8 lg:mt-16">
            <InfoLinks title={SITE_TITLE} />
          </div>
        </Container>
      </div>
      {/* 
      <InfoDiv className="text-xs font-medium py-8 bg-gray-100">
        <Container>
          <Row className="md:justify-end">
            <div>
              <InfoLinks title={siteTitle} />
            </div>
          </Row>
        </Container>
      </InfoDiv> */}
    </footer>
  )
}

export default Footer
