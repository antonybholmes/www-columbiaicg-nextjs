import BlueLink from "../buttons/bluelink"

import HTMLDiv from "../htmldiv"

import FullDiv from "../fulldiv"
import dayjs from "dayjs"

const title = (newsitem: any, date: any, paths: any, showLink: boolean) => (
  <>
    <div className="my-2">
      <h2>
        {showLink ? (
          <BlueLink
            underline={false}
            to={`${paths.newsPath}/${newsitem.fields.id}`}
          >
            {newsitem.fields.title}
          </BlueLink>
        ) : (
          newsitem.fields.title
        )}
      </h2>
    </div>

    <div className="font-light text-gray-500">
      {date.format("MMMM DD, YYYY")}
    </div>
  </>
)

type JobDetailsProps = {
  job: any
}

const JobDetails = ({ job }: JobDetailsProps) => {
  // const jobType = getJobType(job)

  // let jobTypeLink

  // switch (jobType) {
  //   case "Research Scientist":
  //     jobTypeLink = (
  //       <RedLink to={getJobTypeUrl(paths.jobsPath, jobType)}>{jobType}</RedLink>
  //     )
  //     break
  //   default:
  //     jobTypeLink = (
  //       <BlueLink to={getJobTypeUrl(paths.jobsPath, jobType)}>
  //         {jobType}
  //       </BlueLink>
  //     )
  //     break
  // }

  // // See if we should include an image
  // let imageName = null

  // for (let tag of job.fields.tags) {
  //   if (tag.startsWith("image::")) {
  //     const tokens = tag.split("::")
  //     imageName = tokens[1]
  //     break
  //   }
  // }

  const start = dayjs(job.fields.start) //{date.format("MMMM DD, YYYY")}

  return (
    <FullDiv>
      {/* <div className="text-columbia-secondary-blue-99 uppercase">
            {jobType}
          </div> */}
      <h1 className="m-0 font-medium">{job.fields.title}</h1>
      <h3 className="font-light text-gray-500 mb-4">
        {start.format("MMMM DD, YYYY")}
      </h3>

      <HTMLDiv o={job} />
    </FullDiv>
  )
}

export default JobDetails
