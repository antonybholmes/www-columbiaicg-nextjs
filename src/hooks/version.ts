import dayjs from "dayjs"
import useCurrentBuild from "./currentbuild"
import useEpoch from "./epoch"

const useVersion = () => {
  const currentDate = useCurrentBuild()
  const ep = useEpoch()
  //const now = dayjs()

  return `${currentDate.diff(
    ep,
    "months"
  )}.${currentDate.date()}.${currentDate.hour()}.${currentDate.minute()}`
}

export default useVersion
