class User{
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage(rec) {
    let msg = new Message()
    rec.inbox.push(msg)
  }
}
class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }
}

user1 = new User('alex@example.com', '1234')
user2 = new User('me@example.com', '4321')
