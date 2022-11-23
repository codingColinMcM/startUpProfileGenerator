const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //code goes here
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    //code goes here
    return "Intern";
  }

  getSchool() {
    //code goes here
    return this.school;
  }
    
}

module.exports = Intern;