import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/student';
import {StudentService} from '../../service/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students: Student[] = [];
  message: String;
  page: number = 1; // 0 1
  size: number = 3;
  numElement: number;
  fullname: string = "";
  constructor(private studentService: StudentService,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      const result = this.route.snapshot.paramMap.has("name");
      if (result == true) {
        this.fullname = this.route.snapshot.paramMap.get("name");
        this.getStudentByName()
      } else {
        this.getStudents();
      }
    });
  }

  getStudents(){
    this.studentService.getStudents(this.page - 1,this.size).subscribe(
      data => {
        this.students = data,
          this.getElementsStudents();
      }
    );

  }
  getElementsStudents() {
    return this.studentService.getStudentsSize().subscribe(
      data => this.numElement = data
    );
  }

  getElementsStudentsByName() {
    return this.studentService.getStudentSizeByName(this.fullname).subscribe(
      data => this.numElement = data
    );
  }

  getStudentByName(){
    this.studentService.getStudentByName(this.fullname,this.page - 1,this.size).subscribe(
      data => {
        this.students = data
        // this.getElementsStudents()
        this.getElementsStudentsByName()
      }
    );
  }
  removeStudent(id: number){
    const index = this.students.findIndex(student => student.id == id);
    this.studentService.removeStudent(id).subscribe(
      response => {
        this.students.splice(index,1),
          this.message = `success delete id ${id}`,
          this.showMessage()
      }
    );
  }
  showMessage(){
    setTimeout(() => {
      this.message = ""
    },3000)
  }

  done() {
    const result = this.route.snapshot.paramMap.has("name");
    if (result == true) {
      this.getStudentByName()
    } else {
      this.getStudents();
    }
  }
}
