import axios from "axios"

const API = "https://api.columbiaicg.org/v3/publications" //"https://up7cqny9jj.execute-api.us-east-1.amazonaws.com/v2/publications" //"https://api.columbiaicg.org/v2/publications"

const URL = `/data/publications`

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
  format: string = "json"
) => {
  //const {publicationAPI} = useSiteMetadata()

  // const url = `${API}?id=${id}&selected=${selected ? "t" : "f"}${
  //   q != "" ? `&q=${q}` : ""
  // }&n=${n}`

  const url = `${URL}/${id}.${format}`

  //console.log(url)

  axios
    .get(url)
    .then(res => {
      setPublications(res.data.publications)
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
    })
}

export default usePublications
