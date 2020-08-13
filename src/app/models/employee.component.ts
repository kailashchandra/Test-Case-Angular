export class Employee {
      public employeeId : string;
      public firstName : string;
      public lastName : string;
      public emailAddress : string;
  
    constructor(employeeId : string, firstName : string, lastName : string, emailAddress : string) { 
      this.employeeId = employeeId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.emailAddress = emailAddress;
    }
  }