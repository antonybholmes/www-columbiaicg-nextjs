import React from "react"
import getJobType from "./jobtype"
import HideSmall from "../hidesmall"
import ShowSmall from "../showsmall"

type DayProps = {
  job: any
  dayColor: string
  dayBgColor: string
}

const Day: React.FC<DayProps> = ({ job, dayColor, dayBgColor }) => (
  // <div className="shadow">
  <div>
    <div
      className={`uppercase text-sm text-center w-full p-1 ${dayColor} ${dayBgColor}`}
    >
      {job.frontmatter.month}
    </div>
    <div className="uppercase font-light text-center text-2xl w-full">
      {job.frontmatter.day}
    </div>
    <div className={`uppercase text-sm pb-2 text-center w-full`}>
      {job.frontmatter.weekday}
    </div>
  </div>
)

type JobDateProps = {
  job: any
  color?: string
  smallFormat?: boolean
}

const JobDate: React.FC<JobDateProps> = ({ job, color, smallFormat }) => {
  const eventType = getJobType(job)

  let textColor: string
  let dayColor: string
  let dayBgColor: string

  dayColor = "text-white"
  switch (eventType) {
    case "Public Talk":
      textColor = "text-red-500"
      dayBgColor = "bg-red-500"
      break
    default: //"text-columbia-secondary-blue"
      //"bg-columbia-secondary-blue"
      textColor = "text-blue-500"
      dayBgColor = "bg-blue-500"
      break
  }

  if (color !== "white") {
    if (job.frontmatter.tags.includes("color::red")) {
      textColor = "text-red-500"
      dayBgColor = "bg-red-500"
    }
  }

  return (
    <>
      <ShowSmall className={`mb-2 w-full ${textColor}`}>
        {smallFormat && (
          <div className="uppercase w-full">
            {`${job.frontmatter.weekday}, ${job.frontmatter.month} ${job.frontmatter.day}`}
          </div>
        )}
        {!smallFormat && (
          <Day job={job} dayColor={dayColor} dayBgColor={dayBgColor} />
        )}
      </ShowSmall>
      <HideSmall className={`text-center mb-4 w-full`}>
        <Day job={job} dayColor={dayColor} dayBgColor={dayBgColor} />
      </HideSmall>
    </>
  )
}

JobDate.defaultProps = {
  color: "blue",
  smallFormat: false,
}

export default JobDate
