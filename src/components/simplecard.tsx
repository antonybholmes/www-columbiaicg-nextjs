import React, { useState } from "react"

type SimpleCardProps = {
  bg?: string
  hoverBg?: string
  padding?: string
  autoHide?: boolean
  showShadow?: boolean
  rounded?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
  alwaysOn?: boolean
  absolute?: boolean
  className?: string
  style?: any
}

const SimpleCard = React.forwardRef<SimpleCardProps, any>(
  (
    {
      bg,
      hoverBg,
      padding,
      autoHide,
      showShadow,
      rounded,
      onMouseEnter,
      onMouseLeave,
      alwaysOn,
      absolute,
      className,
      style,
      children,
    },
    ref?: any
  ) => {
    const [hover, setHover] = useState(false)

    // useEffect(() => {
    //   gsap
    //   .timeline()
    //   .to(
    //     cardEl.current,
    //     0.5,
    //     { background: extZoom ? zoom : 1, ease: "power3.out" },
    //     0
    //   )
    // },
    // [hover])

    const mouseEnterHandler = (e: any) => {
      setHover(true)

      if (onMouseEnter !== null) {
        onMouseEnter(e)
      }
    }

    const mouseLeaveHandler = (e: any) => {
      setHover(false)

      if (onMouseLeave !== null) {
        onMouseLeave(e)
      }
    }

    return (
      <div
        ref={ref}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={`${
          absolute ? "absolute" : "relative"
        } overflow-hidden border border-solid border-transparent trans-ani ${
          rounded ? "rounded-md" : ""
        } ${
          autoHide
            ? `md:${bg} ${
                hoverBg !== "" ? `md:hover:${hoverBg}` : ""
              } md:${padding} ${
                showShadow
                  ? `md:hover:border-gray-200 md:hover:shadow-card ${
                      alwaysOn ? "border-gray-200 shadow-card" : ""
                    }`
                  : ""
              }`
            : `${bg} ${
                hoverBg !== "" ? `md:hover:${hoverBg}` : ""
              } ${padding} ${
                showShadow
                  ? `hover:border-gray-200 hover:shadow-card ${
                      alwaysOn ? "border-gray-200 shadow-card" : ""
                    }`
                  : ""
              }`
        } ${className}`}
        style={style}
      >
        {children}
      </div>
    )
  }
)

SimpleCard.defaultProps = {
  className: "",
  bg: "bg-white",
  hoverBg: "",
  padding: "p-8",
  autoHide: true,
  showShadow: true,
  rounded: true,
  alwaysOn: false,
  onMouseEnter: null,
  onMouseLeave: null,
  absolute: false,
  style: {},
}

export default SimpleCard
