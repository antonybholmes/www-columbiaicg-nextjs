import React from "react"

interface HTMLDivProps {
  o: any
  excerpt?: boolean
}

/**
 * Show HTML inside a div
 *
 * @param {any} o   An ojbect with either html or body members.
 */
const HTMLDiv = ({ o, excerpt = false }: HTMLDivProps) => {
  if (o !== undefined && o !== null) {
    if (excerpt) {
      return <div dangerouslySetInnerHTML={{ __html: o.excerpt }} />
    } else {
      return <div dangerouslySetInnerHTML={{ __html: o.html }} />
    }
  } else {
    return <></>
  }
}

export default HTMLDiv
