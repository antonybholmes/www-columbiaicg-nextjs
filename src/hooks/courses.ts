import axios from "axios"
import { useEffect, useState } from "react"
import { decode } from "msgpack-lite"
import useSiteMetadata from "./sitemetadata"

const useCourses = () => {
  const [courses, setCourses] = useState<Array<any>>([])

  const { api } = useSiteMetadata()

  useEffect(() => {
    axios.get(`${api.courses}/data.json`).then(res => {
      setCourses(res.data)
    })
  }, [])

  return courses
}

export default useCourses
