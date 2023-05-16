import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage, getDownloadURL, ref } from '@angular/fire/storage';
import { Person } from '../models/Person/Person';
import { AboutUsService } from '../Services/About_Us/about-us.service';

@Component({
  selector: 'app-about_us',
  templateUrl: 'about_us.page.html',
  styleUrls: ['about_us.page.scss']
})
export class AboutUsPage {
  persons : Person[];
  constructor(private about_UsService : AboutUsService) {}

  ngOnInit(){

    this.about_UsService.getPersons().subscribe(res =>{
      this.persons = res;
    })
      
  }
  
}
