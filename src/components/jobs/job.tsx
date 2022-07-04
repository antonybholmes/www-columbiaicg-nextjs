import React, { useState } from "react"
import JobDetails from "./jobdetails"
import { useJobUrl } from "../../utils/urls"
import FlatCard from "../flatcard"
import BlueButtonLink from "../buttons/bluebuttonlink"

export const formatDate = (job: any) => {
  return `${job.start.toLocaleString("default", {
    month: "long",
  })} ${job.start.toLocaleString("default", {
    day: "numeric",
  })}, ${job.start.toLocaleString("default", { year: "numeric" })}`
}

export const formatStartTime = (job: any) => {
  return job.start.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
}

export const formatTime = (job: any) => {
  const et = job.end.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

  return `${formatStartTime(job)} - ${et}`
}

type JobProps = {
  job: any
}

const Job = ({ job }: JobProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return <JobDetails job={job} />
}

export default Job
