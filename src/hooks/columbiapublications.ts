import axios from "axios"

const API =
  "https://bz3ixmjz4d.execute-api.us-east-1.amazonaws.com/publications"

/**
 *
 * @param setPublications   a callback set state function that will update
 *                          a list of publications.
 * @param id                name of person, surname dash first letter of first name e.g. holmes-a
 * @param dept              department person works in e.g. institute-for-cancer-genetics
 * @param selected          whether to retrive person's selected publications or not
 * @param ret               return format, either html or json. If html will return a string of <li> elements that can be injected into the page.
 */
const useColumbiaPublications = (
  setPublications: any,
  id: string = "all",
  dept: string = "",
  selected: boolean = false,
  ret: string = "html"
) => {
  //const {publicationAPI} = useSiteMetadata()

  const url = `${API}?id=${id}&dept=${dept}&selected=${
    selected ? "t" : "f"
  }&ret=${ret}`

  //console.log(url)

  let publications: any[]

  if (selected) {
    axios
      .get(url)
      .then(res => {
        if (res.data.length > 0) {
          setPublications(res.data)
        } else {
          // default to all publications if no strict found
          useColumbiaPublications(setPublications, id, dept, false, ret)
        }
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        // On error, attempt to use all
        useColumbiaPublications(setPublications, id, dept, false, ret)
      })
  } else {
    axios.get(url).then(res => {
      setPublications(res.data)
    })
  }
}

export default useColumbiaPublications
