import Job from "./job"

type JobsProps = {
  jobs: any[]
}

const Jobs = ({ jobs }: JobsProps) => (
  <div className="w-full">
    {jobs.map((job: any, index: number) => (
      <div key={index} className="mb-8">
        <Job job={job} />
      </div>
    ))}
  </div>
)

export default Jobs
