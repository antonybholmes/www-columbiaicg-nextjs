import BasePublicationList from "./basepublicationlist"
import Row from "../row"
import PublicationList from "./publicationlist"
import BlueButton from "../buttons/bluebutton"
import { TEXT_SHOW_MORE } from "../../constants"

const RECORDS_PER_PAGE = 25

type PublicationsProps = {
  publications: any[]
  showAbstract?: boolean
  showCount?: boolean
  showMoreButton?: boolean
  className?: string
  baseMode?: boolean
  onPubClick?: any
  onShowMoreClick?: any
}

const Publications = ({
  publications,
  showAbstract = true,
  showCount = true,
  showMoreButton = false,
  baseMode = true,
  className,
  onPubClick,
  onShowMoreClick,
}: PublicationsProps) => {
  return (
    <>
      {publications.length > 0 && showCount && (
        <Row isVCentered={true} className="justify-between mb-8">
          <div>
            {/* {`Showing ${Math.min(
              filteredPublications.length,
              recordsPerPage
            )} of ${publications.length} ${
              filteredPublications.length > 1 ? "publications" : "publication"
            }`} */}

            {`${publications.length} ${
              publications.length !== 1 ? "results" : "result"
            }`}
          </div>
        </Row>
      )}

      {publications.length > 0 &&
        (baseMode ? (
          <BasePublicationList
            publications={publications}
            showAbstract={showAbstract}
            onPubClick={onPubClick}
          />
        ) : (
          <PublicationList
            publications={publications}
            showAbstract={showAbstract}
            onPubClick={onPubClick}
          />
        ))}

      {showMoreButton && (
        <Row isCentered={true} className="mt-8">
          <div>
            <BlueButton onClick={onShowMoreClick}>{TEXT_SHOW_MORE}</BlueButton>
          </div>
        </Row>
      )}
    </>
  )
}

export default Publications
