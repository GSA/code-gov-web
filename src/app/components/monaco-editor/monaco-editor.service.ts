import { Injectable } from '@angular/core';

@Injectable()

export class MonacoEditorService {
  private schemas: any = {};

  public addSchema(uri, fileMatch, schema) {
    this.schemas[fileMatch] = {
      uri,
      fileMatch,
      schema
    };
  }

  public getSchemas() {
    return Object.values(this.schemas).map(schema => {
      return {
        uri: schema.uri,
        fileMatch: schema.fileMatch,
        schema: schema.schema
      };
    });
  }
}
