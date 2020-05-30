import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getApiEndPoint(apiName: string): string {
    return environment.baseApi + apiName;
  }

}
