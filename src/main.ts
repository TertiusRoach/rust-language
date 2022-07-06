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

//--|►| Main (Log a Ticket) |◄|--//
export namespace Start {
  /* First ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- ◄ */

  /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
  const indexBody: HTMLBodyElement = document.querySelector('#index-body');

  const indexHeader: HTMLElement = document.querySelector('#index-header');

  const indexMain: HTMLElement = document.querySelector('#index-main');

  const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

  const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

  const indexData: HTMLElement = document.querySelector('#index-data');

  /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

  /* Classes ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
  new GetEvent.forPage('default-body', GetPath.forHTML('body'));
  // new GetEvent.forPage('default-header', GetPath.forHTML('header'));

  /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

  /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
  /*--► console.log('--main.js Loaded'); ◄--*/
}
