import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  studentGroub: FormGroup;
  id: number;
  myStudent: Student = new Student(0,"","","","","");

  constructor(private formBuilder: FormBuilder,private serviceStudent: StudentService,private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id != 0){
      this.serviceStudent.getStudent(this.id).subscribe(
        response =>
          this.myStudent = response
      )
    }
    this.studentGroub = this.formBuilder.group({
      student: this.formBuilder.group({
        userName: [''],
        age: [''],
        address: [''],
        phone: [''],
        gender: ['']
      })
    })
  }
  getUserName() {
    return this.studentGroub.get("student").value.userName;
  }
  getAge() {
    return this.studentGroub.get("student").value.age;
  }
  getAddress() {
    return this.studentGroub.get("student").value.address;
  }
  getPhone() {
    return this.studentGroub.get("student").value.phone;
  }
  getGender() {
    return this.studentGroub.get("student").value.gender;
  }
  done() {
    const stu = new Student(this.id, this.getUserName(), this.getGender(), this.getAge(), this.getPhone(), this.getAddress());
    if (this.id == 0) {
      this.serviceStudent.addStudent(stu).subscribe(
        response => {
          this.router.navigateByUrl('/students');
        }
      )
    } else {
      this.serviceStudent.editStudent(stu, this.id).subscribe(
        response => {
          this.router.navigateByUrl('/students');
        }
      )
    }

    console.log(this.getUserName())
    console.log(this.getAge())
    console.log(this.getAddress())
    console.log(this.getPhone())
    console.log(this.getGender())
  }
  }

