import LinkedList from "./linkedList.js"
import assert from "node:assert/strict"

function testAppend() {
  const list = new LinkedList()
  assert.equal(list.toString(), "List is empty")
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.toString(), "dog -> cat -> parrot")
}

function testPrepend() {
  const list = new LinkedList()
  list.prepend("turtle")
  list.prepend("snake")
  list.prepend("hamster")
  assert.equal(list.toString(), "hamster -> snake -> turtle")
}

function testInsert() {
  const list = new LinkedList()
  list.insertAt("eagle", 0)
  assert.equal(list.toString(), "eagle")
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  list.insertAt("fish", 2)
  assert.equal(list.toString(), "eagle -> dog -> fish -> cat -> parrot")
}

function testRemove() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  list.append("eagle")
  list.removeAt(0)
  assert.equal(list.toString(), "cat -> parrot -> eagle")
  list.removeAt(2)
  assert.equal(list.toString(), "cat -> parrot")
}

function testSize() {
  const list = new LinkedList()
  assert.equal(list.size(), 0)
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.size(), 3)
}

function testHead() {
  const list = new LinkedList()
  assert.equal(list.head(), null)
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.head().value, "dog")
}

function testTail() {
  const list = new LinkedList()
  assert.equal(list.tail(), null)
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.tail().value, "parrot")
}

function testAt() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.at(0).value, "dog")
  assert.equal(list.at(1).value, "cat")
}

function testPop() {
  const list = new LinkedList()
  list.pop()
  assert.equal(list.toString(), "List is empty")
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  list.pop()
  assert.equal(list.toString(), "dog -> cat")
}

function testContains() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.contains("cat"), true)
  assert.equal(list.contains("fish"), false)
}

function testFind() {
  const list = new LinkedList()
  list.append("dog")
  list.append("cat")
  list.append("parrot")
  assert.equal(list.find("cat"), 1)
  assert.equal(list.find("fish"), null)
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
