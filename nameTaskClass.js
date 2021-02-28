
class Name{
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
    get fname() {
      return this._fname;
    }
    set fname(str) {
      const results = str[0].toUpperCase() + str.slice(1).toLowerCase();
      console.log(results, '-----');
      this._fname = results;
  
    }
    get lname() {
      return this._lname;
    }
    set lname(str) {
      const results = str[0].toUpperCase() + str.slice(1).toLowerCase();
      this._lname = results;
    }
    fullname() {
      return `${this.fname} ${this.lname}`;
    }
    initials() {
  
      return `${this.fname[0]}.${this.lname[0]}`;
    }
}
const a1 = new Name("john", "SMITH");
console.log(a1.fname);// ➞ "John"

console.log(a1.lname);// ➞ "Smith"

console.log(a1.fullname());// ➞ "John Smith"

a1.initials();// ➞ "J.S"
