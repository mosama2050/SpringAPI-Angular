// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private urlStudents = 'http://localhost:8080/system/students';
  constructor(private httpStudent: HttpClient) { }
  getStudents(page,size): Observable<Student[]> {
    return this.httpStudent.get<Student[]>(this.urlStudents + `?page=${page}&size=${size}`).pipe(
      map(response => response)
    );
  }


  removeStudent(id: number){
    //return this.httpStudent.delete(this.urlStudents + "?id=" + id)
    return this.httpStudent.delete(this.urlStudents + `?id=${id}`)
  }

  addStudent(student: Student){
    return this.httpStudent.post(this.urlStudents,student);
  }

  getStudent(id: number): Observable<Student>{
    return this.httpStudent.get<Student>(`http://localhost:8080/system/student?id=${id}`).pipe(
      map(response => response)
    );
  }

  editStudent(student: Student,id: number){
    return this.httpStudent.put(this.urlStudents + `?id=${id}` , student);
  }
  getStudentByName(name: String): Observable<Student[]>{
    return this.httpStudent.get<Student[]>(this.urlStudents + `/searchname?fullname=${name}`).pipe(
      map(response => response)
    )
  }


  getStudentsSize(): Observable<number> {
    return this.httpStudent.get<number>(this.urlStudents + `/length`).pipe(
      map(response => response)
    );
  }











}
