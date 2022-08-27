import React, { ReactNode, useState } from "react"
import StringBuffer from "../utils/stringbuffer"

type CardProps = {
  bg?: string
  hoverBg?: string
  padding?: string
  autoHide?: boolean
  showShadow?: boolean
  showBorder?: boolean
  rounded?: boolean
  rounding?: string
  onMouseEnter?: any
  onMouseLeave?: any
  absolute?: boolean
  className?: string
  style?: any
  children?: ReactNode
}

const FlatCard = React.forwardRef<CardProps, any>(
  (
    {
      bg,
      hoverBg,
      padding,
      autoHide,
      showShadow,
      showBorder,
      rounded,
      rounding,
      onMouseEnter,
      onMouseLeave,
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

    const cls = new StringBuffer()
      .append(bg)
      .append(absolute ? " absolute" : " relative")
      .append(` ${padding}`)
      .append(" trans-ani")

    if (autoHide) {
      if (rounded) {
        cls.append(` md:${rounding}`)
      }

      if (hoverBg !== "") {
        cls.append(` md:hover:${hoverBg}`)
      }

      if (showShadow && bg === "bg-white") {
        cls.append(` md:shadow-flat-card`)
      }

      if (showBorder && bg === "bg-white") {
        cls.append(` border border-solid border-slate-200`)
      }
    } else {
      if (rounded) {
        cls.append(` ${rounding}`)
      }

      if (showShadow && bg === "bg-white") {
        cls.append(` shadow-flat-card`)
      }

      if (showBorder && bg === "bg-white") {
        cls.append(` border border-solid border-slate-200`)
      }
    }

    cls.append(` ${className}`)

    return (
      <div
        ref={ref}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={cls.toString()}
        style={style}
      >
        {children}
      </div>
    )
  }
)

FlatCard.displayName = "FlatCard"

export default FlatCard
