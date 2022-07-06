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
import { getScript } from 'jquery';

//--|►| LoggedMain |◄|--//
export namespace LoggedMain {
  export class initiateEvents {
    constructor() {
      /* First ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      new DataRead.forMain('logged-main', 'pending');

      /* Declarations ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      const indexBody: HTMLBodyElement = document.querySelector('#index-body');

      const indexHeader: HTMLElement = document.querySelector('#index-header');
      let loggedButton: HTMLElement = indexHeader.querySelector('#logged-tickets button');
      let manageButton: HTMLElement = indexHeader.querySelector('#manage-tickets button');

      const indexMain: HTMLElement = document.querySelector('#index-main');
      let ticketsMain: HTMLElement = indexMain.querySelector('#tickets-container');
      let ticketMain: HTMLCollection = ticketsMain.getElementsByTagName('article');
      let openCoworkers: HTMLButtonElement = indexMain.querySelector('#open-coworkers');
      let pendingTab: HTMLButtonElement = indexMain.querySelector('#pending-tab');
      let assignedTab: HTMLButtonElement = indexMain.querySelector('#assigned-tab');
      let deletedTab: HTMLButtonElement = indexMain.querySelector('#deleted-tab');

      const indexSidebar: HTMLElement = document.querySelector('#index-sidebar');

      const indexOverlay: HTMLElement = document.querySelector('#index-overlay');

      const indexData: HTMLElement = document.querySelector('#index-data');

      /* Functions ▼ -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      function countTickets(tab: 'pending' | 'assigned' | 'resolved' | 'deleted' | 'everything' | 'active') {
        let ticketsNotification: HTMLElement = indexMain.querySelector('#logged-header .notification h2');
        let ticketsContainer: HTMLElement = indexMain.querySelector('#tickets-container');

        switch (tab) {
          case 'pending':
            let pendingTotal: Number = ticketsContainer.getElementsByClassName('pending').length;
            ticketsNotification.style.background = `${GetColor.pendingDefault()}`;
            ticketsNotification.textContent = `${pendingTotal}`;
            break;
          case 'assigned':
            let assignedTotal: Number = ticketsContainer.getElementsByClassName('assigned').length;
            ticketsNotification.style.background = `${GetColor.assignedDefault()}`;
            ticketsNotification.textContent = `${assignedTotal}`;
            break;
          case 'resolved':
            let resolvedTotal: Number = ticketsContainer.getElementsByClassName('resolved').length;
            ticketsNotification.style.background = `${GetColor.resolvedDefault()}`;
            ticketsNotification.textContent = `${resolvedTotal}`;
            break;
          case 'deleted':
            let deletedTotal: Number = ticketsContainer.getElementsByClassName('deleted').length;
            ticketsNotification.style.background = `${GetColor.deletedDefault()}`;
            ticketsNotification.textContent = `${deletedTotal}`;
            break;
          case 'everything':
            let everythingTotal: Number = ticketsContainer.getElementsByTagName('article').length;
            ticketsNotification.style.background = `${GetColor.primaryDark()}`;
            ticketsNotification.textContent = `${everythingTotal}`;
            break;
          case 'active':
            let activeTab: String = ticketsContainer.classList[0];
            let activeStatus: String = activeTab.split('-')[0];
            let activeTotal: Number = ticketsContainer.getElementsByClassName(`${activeStatus}`).length;
            let backgroundColor: String;

            if (activeStatus === 'pending') {
              backgroundColor = GetColor.pendingDefault();
            } else if (activeStatus === 'assigned') {
              backgroundColor = GetColor.assignedDefault();
            } else if (activeStatus === 'resolved') {
              backgroundColor = GetColor.resolvedDefault();
            } else if (activeStatus === 'deleted') {
              backgroundColor = GetColor.deletedDefault();
            } else if (activeStatus === 'everything') {
              backgroundColor = GetColor.primaryDark();
            }

            ticketsNotification.style.background = `${backgroundColor}`;
            ticketsNotification.textContent = `${activeTotal}`;
            break;
        }
      }

      /* Events ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */

      $(ticketMain).on('click', () => {
        let activeTicket: HTMLElement = document.querySelector('.active-ticket');
        let activeStatus: String = activeTicket.classList[0];

        new GetEvent.forPage(`logged-${activeStatus}`, GetPath.forHTML('overlay'));
        indexOverlay.style.display = 'grid';
      });

      $(openCoworkers).on('click', () => {
        loggedButton.className = '';
        manageButton.className = '';
        new GetEvent.forPage('coworker-main', GetPath.forHTML('main'));
      });

      $(pendingTab)
        .on('click', () => {
          ticketsMain.className = 'pending-tickets';
        })
        .on('mouseenter', () => {
          countTickets('pending');
        })
        .on('mouseleave', () => {
          countTickets('active');
        });

      $(assignedTab)
        .on('click', () => {
          ticketsMain.className = 'assigned-tickets';
        })
        .on('mouseenter', () => {
          countTickets('assigned');
        })
        .on('mouseleave', () => {
          countTickets('active');
        });

      $(deletedTab)
        .on('click', () => {
          ticketsMain.className = 'deleted-tickets';
        })
        .on('mouseenter', () => {
          countTickets('deleted');
        })
        .on('mouseleave', () => {
          countTickets('active');
        });

      /* Last ▼ =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ◄ */
      countTickets('active');
      /*--► console.log('--LoggedMain.js Loaded'); ◄--*/
    }
  }
}
