class Namespace {
  constructor(nsId, nsTitle, nsImg, nsEndpoint) {
    this.nsId = nsId
    this.nsTitle = nsTitle
    this.nsImg = nsImg
    this.nsEndpoint = nsEndpoint
    this.rooms = []
  }
  addRoom(roomObj) {
    this.rooms.push(roomObj)
  }
}

module.exports = Namespace
