import { TestBed } from "@angular/core/testing";

import { CalucualtorService } from "./calucualtor.service";
import { LogerService } from "./loger.service";

// describe('CalucualtorService', () => {

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalucualtorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

//karma tool for runinng test case in brower

//below descibes test suit
describe("CalculatorService", () => {
  //below code describe test specification
  //below code is called before each sepecification

  let loger: any, calService: CalucualtorService;
  beforeEach(() => {
    console.log("logging beforeeach");
    loger = jasmine.createSpyObj(LogerService, ["log"]);
    //below is via creating instance
    // calService = new CalucualtorService(loger);
    TestBed.configureTestingModule({
      providers: [
        CalucualtorService,
        { provide: LogerService, useValue: loger },
      ],
    });
    //through dependency injection
    calService = TestBed.get(CalucualtorService);
  });

  it("should add 2 numbers", () => {
    console.log("logging after add");

    //intanitate the calculatorservice
    // const loger = new LogerService();
    //creating a fake jasmine instance

    //Spyon is used to ony when the service is used n number of times
    // spyOn(loger, 'log');
    const result = calService.add(2, 2);
    //below is the test assertion
    expect(result).toBe(4);

    expect(loger.log).toHaveBeenCalledTimes(2);
    //it appears in yellow while pending
    // pending();
  });
  it("should subtract 2 numbers", () => {
    console.log("logging after sub");

    //it appears in red while pending
    // fail();
    // const loger = new LogerService();
    // const calService = new CalucualtorService(loger);
    const result = calService.substract(2, 2);
    //below is the test assertion
    expect(result).toBe(0);
  });
});
