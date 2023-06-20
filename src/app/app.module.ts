import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizAppComponent } from './quiz-app/quiz-app.component';
import { QuestionComponent } from './question/question.component';
import { AnswersComponent } from './answers/answers.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizAppComponent,
    QuestionComponent,
    AnswersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
