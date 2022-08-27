import BasePublication from "./basepublication"

type PublicationListProps = {
  publications: any[]
  showIndices?: boolean
  onPubClick?: any
  showAbstract?: boolean
}

const BasePublicationList = ({
  publications,
  showIndices = false,
  showAbstract = false,
  onPubClick,
}: PublicationListProps) => (
  <ul>
    {publications.map((publication: any, index: number) => (
      <li
        className={` ${index < publications.length - 1 ? "mb-4" : ""}`}
        key={index}
      >
        {/* <FlatCard autoHide={false}> */}
        <BasePublication
          publication={publication}
          index={showIndices ? index + 1 : -1}
          onPubClick={onPubClick}
          showAbstract={showAbstract}
        />
        {/* </FlatCard> */}
      </li>
    ))}
  </ul>
)

export default BasePublicationList
