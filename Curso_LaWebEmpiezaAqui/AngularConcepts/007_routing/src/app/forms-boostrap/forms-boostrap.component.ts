import { Component } from '@angular/core';

class Student{
  public firstName: string;
  public lastName: string;
  public excellence: boolean;

  constructor(){
    this.firstName='';
    this.lastName='';
    this.excellence=false;
  }
}

@Component({
  selector: 'app-forms-boostrap',
  templateUrl: './forms-boostrap.component.html',
  styleUrls: ['./forms-boostrap.component.sass']
})
export class FormsBoostrapComponent {
  student: Student = new Student();
  studentsList: Array<Student> = new Array<Student>();

  addingStudent(){
    this.studentsList.push({
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      excellence: this.student.excellence
    })
    this.student.firstName='';
    this.student.lastName='';
    this.student.excellence=false;
  }
}
