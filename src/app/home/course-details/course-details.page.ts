import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  course;
  ngOnInit() {
    const course_id = this.activatedRoute.snapshot.paramMap.get("id");
    this.course = {
                "_class": "course",
                "id": 1331946,
                "title": "Amazon Web Services (AWS) - Zero to Hero",
                "url": "/course/amazon-web-services-aws-v/",
                "is_paid": false,
                "price": 250,
                "price_detail": null,
                "price_serve_tracking_id": "8UQk3RaSS0uoX9vZ-_bOQA",
                "visible_instructors": [
                    {
                        "_class": "user",
                        "title": "BackSpace Academy",
                        "name": "BackSpace",
                        "display_name": "BackSpace Academy",
                        "job_title": "The fastest route to cloud certification.",
                        "image_50x50": "https://img-c.udemycdn.com/user/50x50/27829848_1d83.jpg",
                        "image_100x100": "https://img-c.udemycdn.com/user/100x100/27829848_1d83.jpg",
                        "initials": "BA",
                        "url": "/user/backspace-academy/"
                    }
                ],
                "image_125_H": "https://img-c.udemycdn.com/course/125_H/1331946_ed41_4.jpg",
                "image_240x135": "https://img-c.udemycdn.com/course/240x135/1331946_ed41_4.jpg",
                "is_practice_test_course": false,
                "image_480x270": "https://img-c.udemycdn.com/course/480x270/1331946_ed41_4.jpg",
                "published_title": "amazon-web-services-aws-v",
                "tracking_id": "",
                "locale": {
                    "_class": "locale",
                    "locale": "en_US",
                    "title": "English (US)",
                    "english_title": "English (US)",
                    "simple_english_title": "English"
                },
                "predictive_score": null,
                "relevancy_score": null,
                "input_features": null,
                "lecture_search_result": null,
                "curriculum_lectures": [],
                "order_in_results": null,
                "curriculum_items": [],
                "headline": "Beginners, Zero to Hero. AWS EC2 web server, NodeJS Server, AWS RDS database server, S3, SES & CloudWatch. FREE",
                "instructor_name": null
            }
  }

}
