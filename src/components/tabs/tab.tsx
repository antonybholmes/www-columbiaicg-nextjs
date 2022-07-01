import React, { Component } from "react"

class Tab extends Component<
  { id: string; activeTab: string; index: number; n: number; onClick: any },
  {}
> {
  _onClick = () => {
    const { id, onClick } = this.props
    onClick(id)
  }

  render() {
    const {
      _onClick,
      props: { activeTab, id, index, n },
    } = this

    let padding

    switch (index) {
      case 0:
        padding = "mr-3"
        break
      case n - 1:
        padding = "ml-3"
        break
      default:
        padding = "mx-3"
        break
    }

    const className = `cursor-pointer px-4 border-b-3 border-solid py-2 trans-ani ${
      activeTab === id
        ? "border-cuimc-blue"
        : "border-transparent hover:text-cuimc-button-blue"
    }`

    return (
      <div className={className} onClick={_onClick}>
        {id}
      </div>
    )
  }
}

export default Tab
