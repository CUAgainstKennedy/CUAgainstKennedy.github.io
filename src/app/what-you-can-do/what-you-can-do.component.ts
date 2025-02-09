import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-you-can-do',
  templateUrl: './what-you-can-do.component.html',
  styleUrls: ['./what-you-can-do.component.scss']
})
export class WhatYouCanDoComponent implements OnInit {
  viewRegents: boolean = false;
  smallScreen: boolean = false;
  regentInfo: any[] = [
    {
      name: 'Sue Sharkey',
      term: 'Current Term 2017-2023',
      position: 'Chair, 4th Congressional District, Republican',
      email: 'Sue.Sharkey@cu.edu',
      phone: '303-860-5668',
      image: 'SueSharkey'
    },
    {
      name: 'John “Jack” Kroll',
      term: 'Current Term 2017-2023',
      position: 'Vice Chair, 1st Congressional District, Democrat',
      email: 'Jack.Kroll@cu.edu',
      phone: '303-860-5668',
      image: 'JohnKroll'
    },
    {
      name: 'John Carson',
      term: 'Current Term 2015-2021',
      position: '6th Congressional District, Republican',
      email: 'John.Carson@cu.edu',
      phone: '303-524-2754',
      image: 'JohnCarson'
    },
    {
      name: 'Glen Gallegos',
      term: 'Current Term 2013-2019',
      position: '3rd Congressional District, Republican',
      email: 'Glen.Gallegos@cu.edu',
      phone: '970-471-2671',
      image: 'GlenGallegos'
    },
    {
      name: 'Heidi Ganahl',
      term: 'Current Term 2017-2023',
      position: 'At Large, Republican',
      email: 'Heidi.Ganahl@cu.edu',
      phone: '303-860-5668',
      image: 'HeidiGanahl'
    },
    {
      name: 'Irene Griego',
      term: 'Current Term 2015-2021',
      position: '7th Congressional District, Democrat',
      email: 'Irene.Griego@cu.edu',
      phone: '303-860-5668',
      image: 'IreneGriego'
    },
    {
      name: 'Chance Hill',
      term: 'Current Term 2019-2025',
      position: '5th Congressional District, Republican',
      email: 'Chance.Hill@cu.edu',
      phone: '303-860-5668',
      image: 'ChanceHill'
    },
    {
      name: 'Linda Shoemaker',
      term: 'Current Term 2015-2021',
      position: '2nd Congressional District, Democrat',
      email: 'Linda.Shoemaker@cu.edu',
      phone: '720-633-5251',
      image: 'LindaShoemaker'
    },
    {
      name: 'Lesley Smith',
      term: 'Current Term 2019-2025',
      position: 'At Large, Democrat',
      email: 'Lesley.Smith@cu.edu',
      phone: '303-860-5668',
      image: 'LesleySmith'
    }
  ];
  demArr: any[] = [
    {
      name: 'CU System Administration/CU Foundation',
      time: 'Monday, April 22 — 3:15 - 4:15 p.m.',
      location: 'Warwick Hotel, Capitol Ballroom'
    },
    {
      name: 'UCCS',
      time: 'Tuesday, April 23 — 1:30 - 2:30 p.m.',
      location: 'University Hall, Room 180'
    },
    {
      name: ' Anschutz Medical Campus',
      time: 'Wednesday, April 24 — 3:30 - 4:30 p.m.',
      location: 'Education 2 North, Room 1102'
    },
    {
      name: 'CU Denver',
      time: 'Thursday, April 25 — 3:00 - 4:00 p.m.',
      location: 'Student Commons, Room 2600'
    },
    {
      name: 'CU Boulder',
      time: 'Friday, April 26 — 10:15 - 11:15 a.m.',
      location: ' Macky Auditorium'
    }
  ]
  constructor() { }
  ngOnInit() {
    this.handleScreenSize(window.innerWidth);
  }
  handleScreenSize(screenSize: number): void {
    if ( !this.smallScreen && screenSize < 1100 ) {
      this.viewRegents = false;
    }
    this.smallScreen = screenSize < 1100;
    if ( !this.smallScreen ) {
      this.viewRegents = true;
    }
    else {
      // if ( this.viewRegents ) {
      //   this.viewRegents = false;
      // }
    }
  }
  @HostListener( 'window:resize', ['$event'] )
  onResize( event ): void {
    this.handleScreenSize( window.innerWidth );
  }
}
