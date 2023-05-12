import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryCoursesPage } from './category-courses.page';

describe('CategoryCoursesPage', () => {
  let component: CategoryCoursesPage;
  let fixture: ComponentFixture<CategoryCoursesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryCoursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
