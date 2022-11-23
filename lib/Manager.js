const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    //code goes here
    super(name, id, email);
    this.office = office;
  }

  getRole() {
    //code goes here
    return "Manager";
  }

  getOfficeNumber() {
    //code goes here
    return this.office;
  }
    
}

module.exports = Manager;