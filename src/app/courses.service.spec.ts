import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

// describe('CoursesService', () => {
//   let service: CoursesService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CoursesService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
describe('CourseService', () => {
  let courseService: CoursesService, httpTestController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService],
      imports: [HttpClientTestingModule],
    });
    courseService = TestBed.get(CoursesService);
    httpTestController = TestBed.get(HttpTestingController);
  });
  it('should retrieve allCourses', () => {});
});
