import useSiteMetadata from "./sitemetadata"

const useCopyright = () => {
  const { copyright } = useSiteMetadata()

  return `\u00a9 ${new Date().getFullYear()} ${copyright}`
}

export default useCopyright
