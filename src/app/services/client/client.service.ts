import { Injectable } from '@angular/core';
import { CodeGovAPIClient } from "@code.gov/code-gov-api-client";

@Injectable()

export class ClientService extends CodeGovAPIClient {
  constructor(){
    super({
      debug: true,
      environment: "development"
    });
  }
}
