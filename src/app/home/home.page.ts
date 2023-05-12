import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperOptions } from "swiper";
import { CoursesService } from '../Services/courses/courses.service';
import { Course } from '../models/Course';
import { CategoriesService } from '../Services/categories/categories.service';
import { Category } from '../models/Category';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { Auth } from 'firebase/auth';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';
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
    
    constructor( 
        private coursesService: CoursesService,
        private categoriesService: CategoriesService,
        private fireStorage:Storage,
        private authService : AuthServiceService
        ) { 
            //categories
            this.categoriesService.getCetegories().subscribe(res => {
                this.categories = res;
                console.log(res);
            })

            //recomended courses (get the TOP 5 ranked courses)
            this.coursesService.getRecomendedCourses().subscribe( res => {
                res.forEach(course => {
                    const imgRef = ref(this.fireStorage,course.image);
                    getDownloadURL(imgRef).then(res => {
                        course.image = res
                    })
                })
                
                this.recomendedCourses = res;
            })

            //courses
            this.coursesService.getCourses().subscribe( res => {
                res.forEach(course => {
                    const imgRef = ref(this.fireStorage,course.image);
                    getDownloadURL(imgRef).then(res => {
                        course.image = res
                    })
                })
                
                this.courses = res;
            })
        

    }
    
    ngOnInit(): void {
       // this.authService.getUserCredentials();
    // this.courses1 = [
    //         {
    //             "_class": "course",
    //             "id": 1331946,
    //             "title": "Amazon Web Services (AWS) - Zero to Hero",
    //             "url": "/course/amazon-web-services-aws-v/",
    //             "is_paid": false,
    //             "price": 250,
    //             "price_detail": null,
    //             "price_serve_tracking_id": "8UQk3RaSS0uoX9vZ-_bOQA",
    //             "visible_instructors": [
    //                 {
    //                     "_class": "user",
    //                     "title": "BackSpace Academy",
    //                     "name": "BackSpace",
    //                     "display_name": "BackSpace Academy",
    //                     "job_title": "The fastest route to cloud certification.",
    //                     "image_50x50": "https://img-c.udemycdn.com/user/50x50/27829848_1d83.jpg",
    //                     "image_100x100": "https://img-c.udemycdn.com/user/100x100/27829848_1d83.jpg",
    //                     "initials": "BA",
    //                     "url": "/user/backspace-academy/"
    //                 }
    //             ],
    //             "image_125_H": "https://img-c.udemycdn.com/course/125_H/1331946_ed41_4.jpg",
    //             "image_240x135": "https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg",
    //             "is_practice_test_course": false,
    //             "image_480x270": "https://img-c.udemycdn.com/course/480x270/1331946_ed41_4.jpg",
    //             "published_title": "amazon-web-services-aws-v",
    //             "tracking_id": "",
    //             "locale": {
    //                 "_class": "locale",
    //                 "locale": "en_US",
    //                 "title": "English (US)",
    //                 "english_title": "English (US)",
    //                 "simple_english_title": "English"
    //             },
    //             "predictive_score": null,
    //             "relevancy_score": null,
    //             "input_features": null,
    //             "lecture_search_result": null,
    //             "curriculum_lectures": [],
    //             "order_in_results": null,
    //             "curriculum_items": [],
    //             "headline": "Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS database server, S3, SES & CloudWatch. FREE",
    //             "instructor_name": null
    //         },
    //         {
    //             "_class": "course",
    //             "id": 4290300,
    //             "title": "Energy Protection & Boundaries Practitioner| ACCREDITED",
    //             "url": "/course/lessons-for-light-workers-healers-counselors-therapists/",
    //             "is_paid": false,
    //             "price": 200,
    //             "price_detail": null,
    //             "price_serve_tracking_id": "6U4VEucmQ1uyL9q6vg3sAQ",
    //             "visible_instructors": [
    //                 {
    //                     "_class": "user",
    //                     "title": "Sufani Garza, Place of Bliss Academy",
    //                     "name": "Sufani Garza,",
    //                     "display_name": "Sufani Garza, Place of Bliss Academy",
    //                     "job_title": "Place of Bliss Academy & Sanctuary| Founder & Director",
    //                     "image_50x50": "https://img-c.udemycdn.com/user/50x50/127795328_5cc8_3.jpg",
    //                     "image_100x100": "https://img-c.udemycdn.com/user/100x100/127795328_5cc8_3.jpg",
    //                     "initials": "SP",
    //                     "url": "/user/sufani-garza/"
    //                 }
    //             ],
    //             "image_125_H": "https://img-c.udemycdn.com/course/125_H/4290300_c0a4_6.jpg",
    //             "image_240x135": "https://img-c.udemycdn.com/course/240x135/4290300_c0a4_6.jpg",
    //             "is_practice_test_course": false,
    //             "image_480x270": "https://img-c.udemycdn.com/course/480x270/4290300_c0a4_6.jpg",
    //             "published_title": "lessons-for-light-workers-healers-counselors-therapists",
    //             "tracking_id": "",
    //             "locale": {
    //                 "_class": "locale",
    //                 "locale": "en_US",
    //                 "title": "English (US)",
    //                 "english_title": "English (US)",
    //                 "simple_english_title": "English"
    //             },
    //             "predictive_score": null,
    //             "relevancy_score": null,
    //             "input_features": null,
    //             "lecture_search_result": null,
    //             "curriculum_lectures": [],
    //             "order_in_results": null,
    //             "curriculum_items": [],
    //             "headline": "Learn to set boundaries, protect yourself from energy drains, grounding, engage self-care, balance and energy work Q&A",
    //             "instructor_name": null
    //         },
    //         {
    //             _class: "course",
    //             id: 473160,
    //             title: "Web Design for Web Developers: Build Beautiful Websites!",
    //             url: "/course/web-design-secrets/",
    //             is_paid: false,
    //             price: 400,
    //             price_detail: null,
    //             price_serve_tracking_id: "YixKjIYPQ9C9q9Y9JeUKHQ",
    //             visible_instructors: [
    //             {
    //                     _class: "user",
    //                     title: "Jonas Schmedtmann",
    //                     name: "Jonas",
    //                     display_name: "Jonas Schmedtmann",
    //                     job_title: "Web Developer, Designer, and Teacher",
    //                     image_50x50: "https://img-c.udemycdn.com/user/50x50/7799204_2091_5.jpg",
    //                     image_100x100: "https://img-c.udemycdn.com/user/100x100/7799204_2091_5.jpg",
    //                     initials: "JS",
    //                     url: "/user/jonasschmedtmann/"
    //                 }
    //             ],
    //             image_125_H: "https://img-c.udemycdn.com/course/125_H/473160_d929_3.jpg",
    //             image_240x135: "https://img-c.udemycdn.com/course/240x135/473160_d929_3.jpg",
    //             is_practice_test_course: false,
    //             image_480x270: "https://img-c.udemycdn.com/course/480x270/473160_d929_3.jpg",
    //             published_title: "web-design-secrets",
    //             tracking_id: "",
    //             locale: {
    //                 _class: "locale",
    //                 locale: "en_US",
    //                 title: "English (US)",
    //                 english_title: "English (US)",
    //                 simple_english_title: "English"
    //             },
    //             predictive_score: null,
    //             relevancy_score: null,
    //             input_features: null,
    //             lecture_search_result: null,
    //             curriculum_lectures: [],
    //             order_in_results: null,
    //             curriculum_items: [],
    //             headline: "Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!",
    //             instructor_name: null
    //         },
    //         {
    //             "_class": "course",
    //             "id": 433798,
    //             "title": "Introduction To Python Programming",
    //             "url": "/course/pythonforbeginnersintro/",
    //             "is_paid": false,
    //             "price": 300,
    //             "price_detail": null,
    //             "price_serve_tracking_id": "fK9gA7mCSyKXeHiLs_abgQ",
    //             "visible_instructors": [
    //                 {
    //                     "_class": "user",
    //                     "title": "Avinash Jain",
    //                     "name": "Avinash",
    //                     "display_name": "Avinash Jain",
    //                     "job_title": "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
    //                     "image_50x50": "https://img-c.udemycdn.com/user/50x50/10260436_946b_6.jpg",
    //                     "image_100x100": "https://img-c.udemycdn.com/user/100x100/10260436_946b_6.jpg",
    //                     "initials": "AJ",
    //                     "url": "/user/avinashjain5/"
    //                 },
    //                 {
    //                     "_class": "user",
    //                     "title": "The Codex",
    //                     "name": "The",
    //                     "display_name": "The Codex",
    //                     "job_title": "Teaching Python through Projects",
    //                     "image_50x50": "https://img-c.udemycdn.com/user/50x50/52310762_220a.jpg",
    //                     "image_100x100": "https://img-c.udemycdn.com/user/100x100/52310762_220a.jpg",
    //                     "initials": "TC",
    //                     "url": "/user/thecodex/"
    //                 }
    //             ],
    //             "image_125_H": "https://img-c.udemycdn.com/course/125_H/433798_1de9_4.jpg",
    //             "image_240x135": "https://img-c.udemycdn.com/course/240x135/433798_1de9_4.jpg",
    //             "is_practice_test_course": false,
    //             "image_480x270": "https://img-c.udemycdn.com/course/480x270/433798_1de9_4.jpg",
    //             "published_title": "pythonforbeginnersintro",
    //             "tracking_id": "",
    //             "locale": {
    //                 "_class": "locale",
    //                 "locale": "en_US",
    //                 "title": "English (US)",
    //                 "english_title": "English (US)",
    //                 "simple_english_title": "English"
    //             },
    //             "predictive_score": null,
    //             "relevancy_score": null,
    //             "input_features": null,
    //             "lecture_search_result": null,
    //             "curriculum_lectures": [],
    //             "order_in_results": null,
    //             "curriculum_items": [],
    //             "headline": "A Quick and Easy Intro into Python Programming",
    //             "instructor_name": null
    //         },
    // ]

    

    }



  
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
