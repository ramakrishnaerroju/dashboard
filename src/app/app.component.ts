import { Component } from '@angular/core';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'dashboard';

  selectedValue: string;
  answer: string;
  questions = [];
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  categories: Category[] = [
    { value: 'category_social', viewValue: 'Social Studies' },
    { value: 'category_science', viewValue: 'Science' },
    { value: 'category_economics', viewValue: 'Economics' },
  ];

  optionChange() {
    this.questions.length = 0;

    if (
      this.option1 &&
      this.option1.length > 0 &&
      this.option2 &&
      this.option2.length > 0 &&
      this.option3 &&
      this.option3.length > 0 &&
      this.option4 &&
      this.option4.length > 0
    )
      this.questions.push(
        this.option1,
        this.option2,
        this.option3,
        this.option4
      );
    console.log(this.questions);
  }
}
