import useViewport from "./viewport"
import { useEffect, useState } from "react"

const BREAKPOINTS: Array<[number, string]> = [
  [640, "sm"],
  [768, "md"],
  [1024, "lg"],
  [1280, "xl"],
  [1440, "2xl"],
  [1600, "3xl"],
  [1800, "4xl"],
]

const useBreakpoints = (): string => {
  const [breapoint, setBreakpoint] = useState("none")
  const { width, height } = useViewport()

  useEffect(() => {
    let ret: string = BREAKPOINTS[BREAKPOINTS.length - 1][1]

    for (let bp of BREAKPOINTS) {
      if (width < bp[0]) {
        ret = bp[1]
        break
      }
    }

    setBreakpoint(ret)
  }, [width])

  return breapoint
}

export default useBreakpoints
