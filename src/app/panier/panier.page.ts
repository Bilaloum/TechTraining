import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/Course';
import { Panier } from '../models/Panier/Panier';
import { CoursesService } from '../Services/courses/courses.service';
import { PanierService } from '../Services/Panier/panier.service';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-panier',
  templateUrl: 'panier.page.html',
  styleUrls: ['panier.page.scss']
})
export class PanierPage {
  coursesUser : Course[];
  constructor(private sr : PanierService,private fireStorage:Storage) {}

  ngOnInit(){

      this.sr.checkCart();

     this.sr.justTest().subscribe(data =>{
      data.forEach(course => {
        const imgRef = ref(this.fireStorage,course.image);
        getDownloadURL(imgRef).then(data => {
            course.image = data
        })
    })
      this.coursesUser = data
     });
  }

  DeleteCourseFromCart(id:String){
    console.log(id);
    this.sr.removeCourseToCart(id);
  }
  
}
