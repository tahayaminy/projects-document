import { Injectable } from '@angular/core';
import { TESTTYPE } from './test-interface';
import { tests } from './mock-test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  getTests():TESTTYPE[]{
    return tests;
  }
}
