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


  students: Student[];
  message: String;

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
    this.studentService.getStudents().subscribe(
      data => this.students = data
    );
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
