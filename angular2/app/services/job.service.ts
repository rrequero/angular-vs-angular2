import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class JobService {

  private jobsUrl = 'http://45.32.235.206:8000/api/jobs';  // URL to web api

  constructor(private http: Http) { }

  getJobs(): Promise<string[]> {
    return this.http.get(this.jobsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
