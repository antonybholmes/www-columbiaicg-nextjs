import React from "react"

interface HTMLDivProps {
  o: any
  excerpt?: boolean
  className?: string
}

/**
 * Show HTML inside a div
 *
 * @param {any} o   An ojbect with either html or body members.
 */
const HTMLDiv = ({ o, excerpt = false, className }: HTMLDivProps) => {
  if (o) {
    if (excerpt) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: o.excerpt }}
          className={className}
        />
      )
    } else {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: o.content }}
          className={className}
        />
      )
    }
  } else {
    return <></>
  }
}

export default HTMLDiv
