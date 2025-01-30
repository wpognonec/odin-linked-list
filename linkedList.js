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
    let tmp = this.headNode
    this.headNode = new Node(value)
    this.headNode.nextNode = tmp
  }
  size() {
    let count = 0
    let currentNode = this.headNode
    while (currentNode) {
      count++
      currentNode = currentNode.nextNode
    }
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
    let currentNode = this.headNode
    while (currentNode) {
      if (currentNode.value === value) return true
      currentNode = currentNode.nextNode
    }
    return false
  }
  find(value) {
    let currentNode = this.headNode
    let i = 0
    while (currentNode) {
      if (currentNode.value === value) return i
      currentNode = currentNode.nextNode
      i++
    }
    return false
  }
  insertAt(value, index = 0) {
    if (!index) this.prepend(value)
    else {
      let node = this.at(index - 1)
      let nextNode = node.nextNode
      let newNode = new Node(value)
      node.nextNode = newNode
      newNode.nextNode = nextNode
    }
  }
  removeAt(index) {
    if (!index) this.headNode = this.headNode.nextNode
    else {
      let node = this.headNode
      for (let i = 0; i < index - 1; i++) {
        node = node.nextNode
      }
      if (node.nextNode) node.nextNode = node.nextNode.nextNode
    }
  }
  toString() {
    let str = ""
    let currentNode = this.headNode
    while (currentNode) {
      str += currentNode.value
      if (currentNode.nextNode) str += " -> "
      currentNode = currentNode.nextNode
    }
    return str
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value
    this.nextNode = nextNode
  }
}
