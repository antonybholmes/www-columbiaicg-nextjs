import { useState } from "react"
import cn from "../../lib/class-names"
import { getPersonName } from "../../lib/people"
import BaseImage from "../images/base-image"

type HeadShotProps = {
  person: any
  className?: string
}

const HeadShot = ({ person, className = "w-80 h-80" }: HeadShotProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(true)
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(false)
  }

  return (
    // <Circle
    //   className={`${rounded ? "border border-solid border-cuimc-gray" : ""}`}
    // >
    <BaseImage
      src={`people/${person.fields.personId}.jpg`}
      alt={getPersonName(person)}
      className={cn("rounded-full", className)}
    />
    // </Circle>
  )
}

export default HeadShot
