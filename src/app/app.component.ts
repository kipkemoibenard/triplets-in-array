import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  arrayForm!: FormGroup
  nonEmptyArray!: [];
  givenSum!: number;
  tripletFound!: number[];

  constructor(
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.getForm();
  }

  ngOnDestroy(): void {

  }

  title = 'Eclectics-interview';

  getForm() {
    this.arrayForm = this.fb.group({
      arrayListzzz: [''],
      givenSum: [''],
    })
  }


  findTripletWithSum(arr: number[], targetSum: number): number[] {
    const n = arr.length;

    // Sort the array
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        const currentSum = arr[i] + arr[left] + arr[right];

        if (currentSum === targetSum) {
          return [arr[i], arr[left], arr[right]];
        } else if (currentSum < targetSum) {
          left++;
        } else {
          right--;
        }
      }
    }

    // Return an empty array if no triplet is found
    return [];
  }

  testMeth() {
    const arr = this.nonEmptyArray;
    const targetSum = this.givenSum;
    const triplet = this.findTripletWithSum(arr, targetSum);
    this.tripletFound = triplet;
    if (triplet.length > 0) {
      console.log("Triplet found:", triplet);
    } else {
      console.log("No triplet found with the given sum.", triplet);
    }
  }

  submit() {

    const arr = this.arrayForm.value.arrayListzzz.split(',').map(Number);
    const targetNum = this.arrayForm.value.givenSum;
    

    this.nonEmptyArray = arr;
    this.givenSum = targetNum;
    console.log("this.nonEmptyArray, sum",this.nonEmptyArray, this.givenSum, typeof(this.givenSum))
    if(this.nonEmptyArray && this.givenSum) {
      this.testMeth();
    }
    
  }


}
