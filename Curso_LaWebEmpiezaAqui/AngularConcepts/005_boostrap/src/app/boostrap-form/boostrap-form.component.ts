import { Component } from '@angular/core';

class Student{
  public firstName: string;
  public lastName: string;

  constructor(){
    this.firstName='';
    this.lastName='';
  }


}

@Component({
  selector: 'app-boostrap-form',
  templateUrl: './boostrap-form.component.html',
  styleUrls: ['./boostrap-form.component.css']
})
export class BoostrapFormComponent {
  alumno: Student = new Student();
  studentsList: Array<Student> = new Array<Student>();

  addingStudent(){
    this.studentsList.push({
      firstName: this.alumno.firstName,
      lastName: this.alumno.lastName
    })
    this.alumno.firstName='';
    this.alumno.lastName='';

    console.log(this.studentsList);
  }
}
