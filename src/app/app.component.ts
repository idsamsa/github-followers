import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courses=[];
  newCourse:string = "";
  index:number
  viewCourse = 'List'
  img = "./assets/images/test.png"
  post = {
    title : 'appangular5',
    isFavorite:false
  }
  trackCourses(index, course){
    return course ? course.id : undefined
  }
  loadCourses(){
    this.courses = [
      {id:1, title: 'Laravel'},
      {id:2, title: 'Php'},
      {id:3, title: 'Dotnet'},
      {id:4, title: 'Angular'},
      {id:5, title: 'VueJS'},
      {id:6, title: 'AdonisJS'}
    ];
  }
  addCourse(){
    if (this.newCourse) {
      this.courses.push({id: this.courses.length+1, title: this.newCourse})
    }
    
    this.newCourse=""
  }
  onKeyUp(){
    this.courses[this.index].title = this.newCourse;
    this.newCourse=""
  }
  deleteCourse(course){
    this.courses.splice(this.courses.indexOf(course),1)
  }
  editCourse(course){
    this.newCourse = course.title
    this.index=this.courses.indexOf(course)
  }

  maFavoriteChanged(args: any){
    console.log("hello is gelukt : " + args.status)
  }
}
