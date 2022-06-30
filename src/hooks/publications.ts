import axios from "axios"
const zlib = require("zlib")

const API = "https://api.columbiaicg.org/v3/publications" //"https://up7cqny9jj.execute-api.us-east-1.amazonaws.com/v2/publications" //"https://api.columbiaicg.org/v2/publications"

// const updatePublications = (
//   publications: Array<any>,
//   setPublications: any,
//   n: number,
//   format: string
// ) => {
//   if (n !== -1) {
//     publications = publications.slice(0, n)
//   }

//   if (format === "mp") {
//     setPublications(decode(publications))
//   } else {
//     setPublications(publications)
//   }
// }

const usePublications = (
  setPublications: any,
  id: string = "all",
  selected: boolean = false,
  q: string = "",
  n: number = 15,
  format: string = "json"
) => {
  //const {publicationAPI} = useSiteMetadata()

  const url = `${API}?id=${id}&selected=${selected ? "t" : "f"}${
    q != "" ? `&q=${q}` : ""
  }&n=${n}`

  //console.log(url)

  let publications: Array<any>

  if (selected) {
    axios
      .get(url)
      .then(res => {
        if (res.data.length > 0) {
          setPublications(res.data)
        } else {
          // default to all publications if no strict found
          usePublications(setPublications, id, false, q, n, format)
        }
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        // On error, attempt to use all
        usePublications(setPublications, id, false, q, n, format)
      })
  } else {
    axios.get(url).then(res => {
      setPublications(res.data)
    })
  }
}

export default usePublications
