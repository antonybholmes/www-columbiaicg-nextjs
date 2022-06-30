import { useEffect, useState } from "react"

const useViewport = () => {
  const [width, setWidth] = useState(-1)
  // Add a second state variable "height" and default it to the current window height
  const [height, setHeight] = useState(-1)

  useEffect(() => {
    const handleResize = () => {
      if (window !== undefined) {
        setWidth(window.innerWidth)
        // Set the height in state as well as the width
        setHeight(window.innerHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Return both the height and width
  return { width, height }
}

export default useViewport
