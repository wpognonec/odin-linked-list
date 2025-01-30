export default class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode
  }

  append(value) {
    if (this.headNode) {
      let lastNode = this.headNode
      while (lastNode.nextNode) lastNode = lastNode.nextNode
      lastNode.nextNode = new Node(value)
    } else {
      this.headNode = new Node(value)
    }
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode)
  }

  size() {
    let count = 0
    for (let node = this.headNode; node; node = node.nextNode) count++
    return count
  }

  head() {
    return this.headNode
  }

  tail() {
    if (!this.headNode) return this.headNode
    let currentNode = this.headNode
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  at(index) {
    let currentNode = this.headNode
    while (index--) {
      currentNode = currentNode.nextNode
    }
    return currentNode
  }

  pop() {
    let currentNode = this.headNode
    if (!this.headNode?.nextNode) {
      this.headNode = null
    } else {
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = null
    }
  }

  contains(value) {
    return !!this.find(value)
  }

  find(value) {
    for (let i = 0, node = this.headNode; node; i++, node = node.nextNode) {
      if (node.value === value) return i
    }
    return null
  }

  insertAt(value, index = 0) {
    if (index <= 0) this.prepend(value)
    else {
      let node = this.at(index - 1)
      node.nextNode = new Node(value, node.nextNode)
    }
  }

  removeAt(index) {
    if (index <= 0) this.headNode = this.headNode.nextNode
    else {
      let node = this.at(index - 1)
      if (node && node.nextNode) node.nextNode = node.nextNode.nextNode
    }
  }

  toString() {
    return this.toArray().join(" -> ") || "List is empty"
  }

  toArray() {
    const result = []
    for (let node = this.headNode; node; node = node.nextNode) {
      result.push(node.value)
    }
    return result
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}
