import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Agency, ClientService } from '../client';


interface Task {
  agency: Agency;
  agency_id: string;
  image: string;
}

interface HelpWantedResponse {
  items: Task[];
}

@Injectable()
export class HelpWantedService {
  public tasks: any;

  constructor(private http: Http, private clientService: ClientService) {}

  cleanTask(task: Task): Task {

    /*
      - Need to figure out how to do this asynchronously
    if (!task.agency) {
      task.agency = this.clientService.getAgencyByAcronym(task.agency_id);
    }
    */

    if (!task.image && task.agency_id) {
        let partialFilename: string;
        if (task.agency_id === 'Department of Education') {
          partialFilename = 'ED';
        } else {
          partialFilename = task.agency_id;
        }
        task.image = `assets/img/logos/agencies/${partialFilename}-50x50.png`;
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
