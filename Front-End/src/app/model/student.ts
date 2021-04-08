export class Student {
  id: number;
  fullName: string;
  gender: string;
  age: string;
  phone: string;
  address: string;
  dateCreated: Date;
  dateUpdated: Date;
  // tslint:disable-next-line:max-line-length
  constructor(id: number, fullName: string, gender: string, age: string, phone: string, address: string, dateCreated: Date, dateUpdated: Date) {
    this.id = id;
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.phone = phone;
    this.address = address;
    this.dateCreated = dateCreated;
    this.dateUpdated = dateUpdated;
  }
}
