import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/provider/models/question.model';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @Input() questionList: Question[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  selectQuestion(questionBody: string) {
    this.chatService.selectedSuggestedQuestion$.next(questionBody);
  }
}
