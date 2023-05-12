import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../Services/categories/categories.service';
import { Category } from '../models/Category';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories: Category[]
  
  constructor(private categoriesService: CategoriesService,private storage: Storage) { 
    
    this.categoriesService.getCetegories().subscribe(res => {  
      this.categories = res;
      
      //get the images from fireStorage
      this.categories.forEach(c => {
        const imgRef = ref(this.storage,c.image)
        getDownloadURL(imgRef).then(img => c.image = img )
      })

    })
  }

  ngOnInit() {}

}
