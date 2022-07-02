import { ReactNode, useState } from "react"

interface SideContactCardProps {
  title?: string
  className?: string
  children?: ReactNode
}

export const SideContactCard = ({
  title = "",
  className,
  children,
}: SideContactCardProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    // <div
    //   onMouseEnter={onMouseEnter}
    //   onMouseLeave={onMouseLeave}
    //   className="bg-black-5 p-8 trans-ani"
    // >
    //   {children}
    // </div>

    // <FlatCard className={className}>{children}</FlatCard>
    <div
      className={`border-t-4 border-solid border-columbia-blue pt-4 ${className}`}
    >
      {title !== "" && <h3 className={`mb-4`}>{title}</h3>}

      {children}
    </div>
  )
}
