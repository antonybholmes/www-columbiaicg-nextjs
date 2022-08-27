import axios from "axios"
import { useEffect, useState } from "react"
import { COURSES_API } from "../constants"

const useCourses = () => {
  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    axios.get(`${COURSES_API}/data.json`).then(res => {
      setCourses(res.data)
    })
  }, [])

  return courses
}

export default useCourses
