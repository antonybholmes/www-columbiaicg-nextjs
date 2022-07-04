import { useState, useEffect } from "react"
import JobSearchResults from "../components/jobs/jobsearchresults"

import Container from "../components/container"
import FullDiv from "../components/fulldiv"
import FlHdDiv from "../components/flhddiv"
import HTMLDiv from "../components/htmldiv"
import useBooleanSearch from "../hooks/booleansearch"
import MainSideCol from "../components/mainsidecol"
import PageLayout from "../layouts/pagelayout"
import dayjs from "dayjs"
import { getJobPosts } from "../lib/api"
import markdownToHtml from "../lib/markdownToHtml"

const EMPTY_QUERY = ""

export const search = (query: any, jobs: any): any => {
  const ql = query.text.toLowerCase().replace(/\+/g, " ")

  const ret: any = []

  const now = new Date()

  const nowDay = parseInt(now.toLocaleString("default", { day: "numeric" }))
  const nowMonth = parseInt(now.toLocaleString("default", { month: "numeric" }))
  const nowYear = parseInt(now.toLocaleString("default", { year: "numeric" }))

  for (let job of jobs) {
    if (
      job.fields.title.toLowerCase().includes(ql) ||
      job.excerpt.toLowerCase().includes(ql)
    ) {
      ret.push(job)
    }
  }

  return ret
}

const booleanSearchAnd = (s1: any, s2: any): any => {
  const names: Set<any> = new Set()

  for (let job of s2) {
    names.add(job.fields.title)
  }

  const ret: any = []

  for (let job of s1) {
    if (names.has(job.fields.title)) {
      ret.push(job)
    }
  }

  return ret
}

const booleanSearchOr = (s1: any, s2: any): any => {
  const names: Set<any> = new Set()

  const jobMap: any = {}

  for (let job of s1) {
    if (!(job.date.year in jobMap)) {
      jobMap[job.date.year] = {}
    }

    if (!(job.date.month in jobMap[job.date.year])) {
      jobMap[job.date.year][job.date.month] = {}
    }

    if (!(job.date.day in jobMap[job.date.year][job.date.month])) {
      jobMap[job.date.year][job.date.month][job.date.day] = {}
    }

    jobMap[job.date.year][job.date.month][job.date.day][job.fields.title] = job
  }

  for (let job of s2) {
    if (!(job.date.year in jobMap)) {
      jobMap[job.date.year] = {}
    }

    if (!(job.date.month in jobMap[job.date.year])) {
      jobMap[job.date.year][job.date.month] = {}
    }

    if (!(job.date.day in jobMap[job.date.year][job.date.month])) {
      jobMap[job.date.year][job.date.month][job.date.day] = {}
    }

    jobMap[job.date.year][job.date.month][job.date.day][job.fields.title] = job
  }

  let ret: any = []

  for (let year of Object.keys(jobMap).sort()) {
    for (let month of Object.keys(jobMap[year]).sort()) {
      for (let day of Object.keys(jobMap[year][month]).sort()) {
        for (let title of Object.keys(jobMap[year][month][day]).sort()) {
          ret.push(jobMap[year][month][day][title])
        }
      }
    }
  }

  return ret
}

type JobProps = {
  job: any
  person: any
}

const Job = ({ job, person }: JobProps) => {
  const title = job.fields.title

  const start = dayjs(job.fields.start)

  return (
    <MainSideCol>
      <FullDiv>
        <h1 className="m-0 font-medium">{job.fields.title}</h1>
        <h3 className="font-light text-gray-500 mb-4">
          {start.format("MMMM DD, YYYY")}
        </h3>

        <HTMLDiv o={job} className="text-lg" />
      </FullDiv>
      <></>
    </MainSideCol>
  )
}

const useJobs = (data: any) => {
  const ret = []

  for (const { node } of data.jobs.edges) {
    const course = node

    ret.push(course)
  }

  return ret
}

interface PageProps {
  allJobs: any[]
}

const Page = ({ allJobs = [] }: PageProps) => {
  const [query, setQuery] = useState(EMPTY_QUERY)
  const [filteredJobs, setFilteredJobs] = useState(allJobs)
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(10)
  const [selectedDays, setSelectedDays] = useState([])
  const [filterJobTypes, setFilterJobTypes] = useState([])

  useEffect(() => {
    if (query !== "") {
      setFilteredJobs(
        useBooleanSearch(
          query,
          allJobs,
          search,
          booleanSearchAnd,
          booleanSearchOr
        )
      )
    } else {
      setFilteredJobs(allJobs)
    }
    setPage(1)
  }, [query])

  const handleDayClick = (day: any, { selected }) => {
    // const { selectedDays } = this.state;
    // if (selected) {
    //   const selectedIndex = selectedDays.findIndex(selectedDay =>
    //     DateUtils.isSameDay(selectedDay, day)
    //   );
    //   selectedDays.splice(selectedIndex, 1);
    // } else {
    //   selectedDays.push(day);
    // }
    setQuery("")
    setSelectedDays(selected ? [] : [day])
    setPage(1)
  }

  const handleSearch = (text: string, clicked: boolean) => {
    // update state according to the latest query and results
    setQuery(text)
    setPage(1)
  }

  const handleTypeClick = (eventTypes: any) => {
    setFilterJobTypes(eventTypes)
  }

  const onPageChanged = (data: any) => {
    const { page } = data
    setPage(page)
  }

  // // Filter by types
  // if (filterJobTypes.length > 0) {
  //   jobs = jobs.filter((e: any) => {
  //     for (let t of filterJobTypes) {
  //       if (e.fields.tags.includes(t)) {
  //         return true
  //       }
  //     }

  //     return false
  //   })
  // }

  const offset = (page - 1) * recordsPerPage

  let pagedJobs = filteredJobs.slice(offset, offset + recordsPerPage)

  return (
    <PageLayout
      path={"/jobs"}
      crumbs={[["Jobs", "/jobs"]]}
      title={"Jobs"}
      nav="Jobs"
    >
      {/* <div
        style={{
          backgroundImage: `url(${bgsvg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      > */}
      <FlHdDiv>
        <Container>
          <MainSideCol>
            <FullDiv>
              {/* <ShowSmall size="lg">
                  <SearchBar
                    handleInputChange={handleInputChange}
                    placeholder="Search jobs..."
                    text={query}
                  />
                </ShowSmall> */}

              {/* <HideSmall size="lg">
                  <Row isCentered={true}>
                    <div className="w-1/2">
                      <SearchBar
                        handleInputChange={handleInputChange}
                        placeholder="Search jobs..."
                        text={query}
                      />
                    </div>
                  </Row>
                </HideSmall> */}

              <JobSearchResults
                jobs={filteredJobs}
                pagedJobs={pagedJobs}
                page={page}
                recordsPerPage={recordsPerPage}
                onPageChanged={onPageChanged}
              />
            </FullDiv>
            <></>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </PageLayout>
  )
}

export default Page

export async function getStaticProps() {
  const jobs = getJobPosts()

  const allJobs = await Promise.all(
    jobs.map(async post => {
      const content = await markdownToHtml(post.fields.content || "")
      return {
        ...post,
        content,
      }
    })
  )

  return {
    props: {
      allJobs,
    },
  }
}
