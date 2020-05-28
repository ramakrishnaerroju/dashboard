import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { QuestionComponent } from './components/question/question.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  categories: Category[] = [
    { value: 'category_social', viewValue: 'Social Studies' },
    { value: 'category_science', viewValue: 'Science' },
    { value: 'category_economics', viewValue: 'Economics' },
  ];
  @ViewChild('questionsContainer', { read: ViewContainerRef })
  entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  createQuestion() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(QuestionComponent);
    const componentRef = this.entry.createComponent(factory);
  }
}
