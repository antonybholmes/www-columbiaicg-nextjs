import React, { Component } from "react"

class VertTab extends Component<
  { id: string; activeTab: boolean; index: number; n: number; onClick: any },
  {}
> {
  _onClick = (event: any) => {
    const { id, onClick } = this.props
    onClick(event)
  }

  render() {
    const {
      _onClick,
      props: { activeTab, id, index, n },
    } = this

    const className = `block cursor-pointer px-3 h-10 text-sm font-medium trans-ani w-full text-left ${
      activeTab
        ? "text-cuimc-button-blue"
        : "border-transparent text-slate-400 hover:text-default-color"
    }`

    return (
      <li>
        <button id={id} index={index} className={className} onClick={_onClick}>
          {id}
        </button>
      </li>
    )
  }
}

export default VertTab
