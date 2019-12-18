class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }
    send(message, to) {
        this.room.send(message, this, to);
    }
    receive(message, from) {
        console.log(`From: ${from.name} => To ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }
    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }
    send(message, from, to) {
        if(to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
               if(this.users[key] !== from) {
                   this.users[key].receive(message, from);
               }
            });
        }
    }
}

const vova = new User('Vova');
const sasha = new User('Sasha');
const igor = new User('Igor');

const room = new ChatRoom();

room.register(vova);
room.register(sasha);
room.register(igor);

vova.send('Hello!', sasha)

sasha.send('Hello Vova!', vova)
igor.send('Hello EveryBody!')
