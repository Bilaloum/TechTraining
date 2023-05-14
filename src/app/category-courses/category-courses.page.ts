import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../models/Category';
import { CategoriesService } from '../Services/categories/categories.service';
import { CoursesService } from '../Services/courses/courses.service';
import { Course } from '../models/Course';
import { Storage, getDownloadURL } from '@angular/fire/storage';
import { ref } from 'firebase/storage';

@Component({
  selector: 'app-category-courses',
  templateUrl: './category-courses.page.html',
  styleUrls: ['./category-courses.page.scss'],
})
export class CategoryCoursesPage implements OnInit {

  category : Category;
  coursesByCategory: Course[]; 

  constructor(private router: ActivatedRoute, 
    private categoriesService: CategoriesService,
    private coursesService: CoursesService,
    private storage:Storage) { }

  ngOnInit() {
    const categoryId = this.router.snapshot.paramMap.get("id");
    this.categoriesService.getCategoryById(categoryId).subscribe(res => {
      this.category = res ;
    })

    this.coursesService.getCourseseByCategory(categoryId).subscribe(res => {
      this.coursesByCategory = res;

      //get the images from storage
      this.coursesByCategory.forEach(course => {
        const imgRef = ref(this.storage,course.image)
        getDownloadURL(imgRef).then( img => course.image = img)
      
      })  
    })

  }

}
