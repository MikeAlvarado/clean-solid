// (() => {
//   type Gender = 'M' | 'F';

//   class Person {
//     public name: string;
//     public gender: Gender;
//     public birthdate: Date;

//     constructor(name: string, gender: Gender, birthdate: Date){
//       this.name = name;
//       this.gender = gender;
//       this.birthdate = birthdate;
//     }
//   }

//   const newPerson = new Person('mike', 'M', new Date('1996-06-14'));
//   console.log(newPerson);
// })()

(() => {
  type Gender = 'M' | 'F';
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'mike@kodda.com',
    'Admin',
    'mike',
    'M',
    new Date('1996-06-14')
  );

  console.log({ userSettings });
})();
