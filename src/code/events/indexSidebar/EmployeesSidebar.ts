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

//--|►| Employees Sidebar |◄|--//
export namespace EmployeesSidebar {
  export class initiateEvents {
    constructor() {
      // First ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forSidebar('employees-sidebar');

      // Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');
      let closeEmployees: HTMLElement = indexSidebar.querySelector('#close-employees');
      let activeColleague: HTMLElement = indexSidebar.querySelector('.active-colleague');
      let userButton: HTMLElement = indexSidebar.querySelector('#view-employees header span');
      let employeeHeader: HTMLElement = indexSidebar.querySelector('#view-employees header');
      let employeeFooter: HTMLElement = indexSidebar.querySelector('#view-employees footer');
      let employeeButtons: HTMLCollection = employeeFooter.getElementsByTagName('span');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      // Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      // Classes ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      // Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      $(employeeHeader).on('click', () => {
        /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
        indexSidebar.style.display = 'none';

        /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
        new GetEvent.forPage('user-main', GetPath.forHTML('main'));
      });
      $(employeeButtons).on('click', () => {
        /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
        manageButton.className = '';
        loggedButton.className = '';
        indexSidebar.style.display = 'none';

        /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
        new GetEvent.forPage('colleague-main', GetPath.forHTML('main'));
      });
      $(closeEmployees).on('click', () => {
        indexSidebar.style.display = 'none';
      });

      // Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      /*--► console.log('--EmployeesSidebar.js Loaded'); ◄--*/
    }
  }
}
