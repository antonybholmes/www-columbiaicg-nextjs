import useInstitutePublications from "./institutepublications"
import useFirstAuthorPublications from "./firstauthorpublications"

const useCorePublications = (publications: Array<any>) => {
  return useInstitutePublications(useFirstAuthorPublications(publications))
}

export default useCorePublications
