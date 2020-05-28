import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'da-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  selectedValue: string;
  answer: string;
  questions = [];
  option1: string;
  option2: string;
  option3: string;
  option4: string;

  constructor() {}

  ngOnInit(): void {}

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
