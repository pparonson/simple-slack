class Room {
  constructor(rmId, rmTitle, namespace, privateRm = false) {
    this.rmId = rmId
    this.rmTitle = rmTitle
    this.namespace = namespace
    this.privateRm = privateRm
    this.history = []
  }
  addMessage(msg) {
    this.history.push(msg)
  }
  clearHistory() {
    this.history = []
  }
}

module.exports = Room
