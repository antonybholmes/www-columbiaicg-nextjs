class Stack {
  data: Array<any>
  top: number

  constructor() {
    this.data = []
    this.top = 0
  }

  push(element: any) {
    this.data[this.top++] = element
  }

  size(): number {
    return this.top
  }

  peek(): any {
    return this.data[this.top - 1]
  }

  isEmpty(): boolean {
    return this.top === 0
  }

  pop(): any {
    if (this.isEmpty() === false) {
      --this.top
      return this.data.pop() // removes the last element
    } else {
      return null
    }
  }

  values(): Array<any> {
    return this.data //.reverse()
  }

  toString(): string {
    return this.reverse().toString()
  }

  reverse(): Array<any> {
    return this._reverse(this.top)
  }

  _reverse(index: number): Array<any> {
    return this.data.slice(0, index).reverse()
  }
}

export default Stack
