import getInstitutePublications from "./institutepublications"
import getFirstAuthorPublications from "./firstauthorpublications"

const useCorePublications = (publications: any[]) => {
  return getInstitutePublications(getFirstAuthorPublications(publications))
}

export default useCorePublications
