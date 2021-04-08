import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students: Student[];

  constructor(private studentService: StudentService) {
  }
  ngOnInit(): void {
    this.getStudents();
  }

  // tslint:disable-next-line:typedef
  getStudents(){
    this.studentService.getStudents().subscribe(
      data => this.students = data
    );
  }
}
