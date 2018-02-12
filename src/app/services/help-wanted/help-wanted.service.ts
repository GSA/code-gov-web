import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiService } from '../api';
import { AgencyService } from '../agency';


interface Task {
  agency: any,
  agency_id: string,
  image: string
}

interface HelpWantedResponse {
  items: Task[]
}

@Injectable()
export class HelpWantedService extends ApiService {
  public tasks: any;

  constructor(private http: Http, private agencyService: AgencyService) {
    super(http);
  }

  cleanTask(task: Task): Task {

    if (!task.agency) {
      task.agency = this.agencyService.getAgency(task.agency_id);
    }

    if (!task.image && task.agency_id) {
        task.image = `assets/img/logos/agencies/${task.agency_id}-50x50.png`;
    }
    return task;
  }

  cleanTasks(tasks: Task[]): Task[] {
    return tasks.map(task => this.cleanTask(task));
  }

  getTasks() {
    return this.http.get('assets/help-wanted.json')
      .map((response: Response) => response.json() as HelpWantedResponse)
      .map((data: HelpWantedResponse) => this.cleanTasks(data.items));
  }

}
