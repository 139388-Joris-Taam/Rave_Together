// modules/user.js
class User {
  constructor(username, socketId) {
      this.username = username;
      this.socketId = socketId;
      this.trackQueue = [];
  }

  addToQueue(music) {
      this.trackQueue.push(music);
  }

  removeFromQueue(index) {
      if (index >= 0 && index < this.trackQueue.length) {
          return this.trackQueue.splice(index, 1)[0];
      }
      return null;
  }

  getQueue() {
      return this.trackQueue;
  }
}

module.exports = User;
