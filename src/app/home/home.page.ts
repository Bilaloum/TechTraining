import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from "swiper";
import { CoursesService } from '../Services/courses/courses.service';
import { Course } from '../models/Course';
import { CategoriesService } from '../Services/categories/categories.service';
import { Category } from '../models/Category';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    bannerConfig: SwiperOptions;
    categoriesSwap: SwiperOptions; 

    categories: Category[]; 
    courses: Course[];
    recomendedCourses:Course[];
    user = null ;
    photoURL:string;
    displayName:string;
    
    constructor( 
        private coursesService: CoursesService,
        private categoriesService: CategoriesService,
        private fireStorage:Storage,
        private authService : AuthServiceService,
        public navCtrl: NavController,
        ) { 
            //categories
            this.categoriesService.getCetegories().subscribe(res => {
                this.categories = res;

            })

            //recomended courses (get the TOP 5 ranked courses)
            this.coursesService.getRecomendedCourses().subscribe( res => {
                
                //get the images from storage
                res.forEach(course => {
                    const imgRef = ref(this.fireStorage,course.image);
                    getDownloadURL(imgRef).then(res => {
                        course.image = res
                    })
                })
                
                this.recomendedCourses = res;
            })

            
            this.coursesService.getCourses().subscribe( res => {
                
                //get the images from storage
                res.forEach(course => {
                    const imgRef = ref(this.fireStorage,course.image);
                    getDownloadURL(imgRef).then(res => {
                        course.image = res
                    })
                })
                
                this.courses = res;
            })
        
    }
    
    ngOnInit(): void {}


    ngAfterContentChecked(): void {
        
        this.bannerConfig ={
            slidesPerView: 1.5,
            spaceBetween:10,
        }

        this.categoriesSwap = {
            slidesPerView:2.5,
            spaceBetween:5,
        }
    }





}