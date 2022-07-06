//--|▼| Tools (Import) |▼|--//
import { DataCreate } from 'code/utilities/DataCreate';
import { DataErase } from 'code/utilities/DataErase';
import { DataRead } from 'code/utilities/DataRead';
import { DataUpdate } from 'code/utilities/DataUpdate';

import { GetArray } from 'code/utilities/GetArray';
import { GetColor } from 'code/utilities/GetColor';
import { GetElement } from 'code/utilities/GetElement';
import { GetEvent } from 'code/utilities/GetEvent';
import { GetPath } from 'code/utilities/GetPath';

//--|►| Default Data |◄|--//
export namespace DefaultData {
  export class initiateEvents {
    constructor() {
      new DataCreate.forBlock('departments');
      new DataCreate.forBlock('employees');
      new DataCreate.forBlock('tickets');

      /*--► console.log('--DefaultData.js Loaded'); ◄--*/
    }
  }
}
