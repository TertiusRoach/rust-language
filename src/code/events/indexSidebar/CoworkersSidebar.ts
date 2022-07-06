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

import { UseCapify } from 'code/utilities/UseCapify';
import { UseDatefy } from 'code/utilities/UseDatefy';
import { UseValufy } from 'code/utilities/UseValufy';

//--|►| Coworkers Sidebar |◄|--//
export namespace CoworkersSidebar {
  export class initiateEvents {
    constructor() {
      // First ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ //
      new DataRead.forSidebar('coworkers-sidebar');

      // Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ //
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');
      let closeCoworkers: HTMLElement = document.querySelector('#close-coworkers');
      let departmentSelect: HTMLSelectElement = document.querySelector('#department-form select');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      // Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ //

      // Classes ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ //

      // Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ //
      $(closeCoworkers).on('click', () => {
        indexSidebar.style.display = 'none';
      });
      // Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ //
      /*--► console.log('--CoworkersSidebar.js Loaded'); ◄--*/
    }
  }
}
