import LinkedList from "./linkedList.js"

function testAppend() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.toString()) // dog -> cat -> parrot
}

function testPrepend() {
  const list = new LinkedList()
  list.prepend("turtle")
  list.prepend("snake")
  list.prepend("hamster")
  console.log(list.toString()) // hamster -> snake -> turtle
}

function testInsert() {
  const list = new LinkedList()
  list.insertAt("eagle", 0)
  console.log(list.toString()) // eagle
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  list.insertAt("fish", 2)
  console.log(list.toString()) // eagle -> dog -> fish -> cat -> parrot
}

function testRemove() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  list.append("eagle")
  list.removeAt(0)
  console.log(list.toString()) // cat -> parrot -> eagle
  list.removeAt(2)
  console.log(list.toString()) // cat -> parrot
}

function testSize() {
  const list = new LinkedList()
  console.log(list.size()) // 0
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.size()) // 3
}

function testHead() {
  const list = new LinkedList()
  console.log(list.head()) // null
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.head()) // Node { value: 'dog', nextNode: Node { value: 'cat', nextNode: Node { value: 'parrot', nextNode: null }}}
}

function testTail() {
  const list = new LinkedList()
  console.log(list.tail()) // null
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.tail()) // Node { value: 'parrot', nextNode: null }
}

function testAt() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.at(0)) // Node { value: 'dog', nextNode: Node { value: 'cat', nextNode: Node { value: 'parrot', nextNode: null }}}
  console.log(list.at(1)) // Node { value: 'cat', nextNode: Node { value: 'parrot', nextNode: null }}
}

function testPop() {
  const list = new LinkedList()
  list.pop()
  console.log(list.toString())
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  list.pop()
  console.log(list.toString()) // dog -> cat
}

function testContains() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.contains("cat")) // true
  console.log(list.contains("fish")) // false
}

function testFind() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  console.log(list.find("cat")) // 1
  console.log(list.find("fish")) // false
}

testAppend()
testPrepend()
testInsert()
testRemove()
testSize()
testHead()
testTail()
testAt()
testPop()
testContains()
testFind()
