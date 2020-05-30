import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KnowledgeItem } from 'src/app/components/chat/models/knowledge-item.model';
import { Question } from '../models/question.model';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from './configuration.service';
import { AppConfig } from '../configuration/api';

@Injectable({
  providedIn: 'root'
})
export class AdminSettingService {

  constructor(
    private http: HttpClient,
    private configService: ConfigurationService
  ) { }

  GetAllQuestion(): Observable<any> {
    return this.http.get(`${environment.baseApi}/suggested-question`);
  }

  AddQuestion(religionId: number, questionBodyInput: string): Observable<any> {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.createQuestion);

    const question: Question =
    {
      questionBody: questionBodyInput
    };

    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress + religionId, question);
  }


  AddKnowledgeItem(religionId: number, valueTitle: string, valueDescription: string): Observable<any> {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.createKnowledgeItem);

    const value: KnowledgeItem =
    {
      title: valueTitle,
      description: valueDescription
    };

    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress + religionId, value);
  }


  AddNation(nationName: string): Observable<any> {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.createNation);

    const nation = {
      name: nationName
    };

    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress, nation);
  }

  AddReligion(nationId: string, religionName: string): Observable<any> {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.createReligion);

    const religion = {
      name: religionName
    };

    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress + nationId, religion);
  }

  removeReligion(nationId: string, religionId: string) {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.removeReligion);
    const data = {
      nationId,
      religionId
    };
    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress, data);
  }

  removeNation(nationId: string) {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.removeNation);
    const data = {
      nationId
    };
    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress, data);
  }

  removeQuestion(questionId: string) {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.removeQuestion);
    const data = {
      questionId
    };
    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress, data);
  }

  removeGoodToKnowItem(itemId: string) {
    const apiAddress = this.configService.getApiEndPoint(AppConfig.api.removeGoodToKnowItem);
    const data = {
      itemId
    };
    return this.http.post<{ message: string, successStatus: boolean }>(apiAddress, data);
  }
}
