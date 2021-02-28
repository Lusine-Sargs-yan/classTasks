class User {
    static userCount = 0;
    constructor(username) {
        this.username = username;
        User.userCount += 1;
    }
  
}
const u1 = new User("johnsmith10");
User.userCount;// ➞ 1

const u2 = new User("marysue1989");
User.userCount;// ➞ 2

const u3 = new User("milan_rodrick");
User.userCount;// ➞ 3
u1.username;// ➞ "johnsmith10"

u2.username;// ➞ "marysue1989"

u3.username;// ➞ "milan_rodrick"