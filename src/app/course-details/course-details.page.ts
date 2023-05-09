import { Component, OnInit } from '@angular/core';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CoursesService } from 'src/app/Services/courses/courses.service';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  
  course: Course;
  
  constructor(private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private fireStorage: Storage
    ) { 
    
  }
  ngOnInit() {
    const course_id = this.activatedRoute.snapshot.paramMap.get("id");
      
      this.coursesService.getCourseById(course_id).subscribe(res => {
        
        const imgRef = ref(this.fireStorage,res.image);
        getDownloadURL(imgRef).then(img => {
                        res.image = img
                    })
        this.course = res;
      })
  }

}
