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
  size: number = 2;
  numElement: number =10;

  constructor(private studentService: StudentService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      const result = this.route.snapshot.paramMap.has("name");
      if (result == true) {
        const name = this.route.snapshot.paramMap.get("name");
        this.getStudentByName(name)
      } else {
        this.getStudents();
      }
    });
  }

  // tslint:disable-next-line:typedef
  getStudents() {
    this.studentService.getStudents(this.page-1,this.size).subscribe(
      data => this.students = data
    );
  }
  done() {
    this.getStudents();
  }

  removeStudent(id: number) {
    const index = this.students.findIndex(student => student.id == id);
    this.studentService.removeStudent(id).subscribe(
      response => {
        // this.getStudents(),
        this.students.splice(index, 1),
          this.message = `success delete id ${id}`,
          this.showMessage();
      }
    );
  }

  showMessage() {
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

  getStudentByName(name: String) {
    this.studentService.getStudentByName(name).subscribe(
      data => this.students = data

    );
  }


}
