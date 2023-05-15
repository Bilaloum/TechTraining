import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Person } from 'src/app/models/Person/Person';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private db : AngularFirestore) { }


  getPersons(): Observable<Person[]> {
    return this.db.collection<Person>('about_us').valueChanges({ idField: 'id' });
  }
}
