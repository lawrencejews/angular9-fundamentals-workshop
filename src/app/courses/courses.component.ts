import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course

  selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript Hard Parts',
      description: 'Ruler of Web Development',
      percentComplete: 20,
      favorite: true
    },
    {
      id: 3,
      title: 'Vue Platform',
      description: 'Github Favorite Language 2021',
      percentComplete: 24,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }
  deleteCourse(courseId) {
    console.log('Course Deleted!', courseId);
  }

  saveCourse() {
    console.log('Save course')
  }

  cancel() {
    this.resetSelectedCourse();
  }

}
