import { SITE_TITLE } from "../constants"

const useCopyright = () => {
  return `\u00a9 ${new Date().getFullYear()} ${SITE_TITLE}`
}

export default useCopyright
