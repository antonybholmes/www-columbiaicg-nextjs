const getJobTypeUrl = (root: string, jobType: string) => {
  return `${root}/types/${jobType.replace(/ /g, "-").toLowerCase()}`
}

export default getJobTypeUrl
