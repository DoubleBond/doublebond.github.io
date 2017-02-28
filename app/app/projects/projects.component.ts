import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Object;

  constructor() { }

  ngOnInit() {
    this.projects = [
        {
          filter: 'school',
          title: 'Super - Ride Sharing',
          image: '../../assets/images/projects/super.png',
          description: 'Super is a ride sharing app that lets users post or find rides from all over Canada. ' +
            'It is implemented with Bootstrap, Laravel, and the Google Geocoding API.' +
            '<a target="_blank" href="https://github.com/ghiobi/Everest-353"><i class="fa fa-github-square"></i></a>' +
            '<a target="_blank" href="http://super.laurendylam.com"><i class="fa fa-external-link-square"></i></a>',
          date: 'November 2016'
        },
        {
          filter: 'personal',
          title: 'LastCallMTL',
          image: '../../assets/images/projects/lastcallmtl.png',
          description: 'Currently in development, LastCallMtl brings ease to organizing and joining events in Montreal. ' +
            'It is implement with Bootstrap, CodeIgniter and JQuery with collaboration with 3 other teammates.' +
            '<a target="_blank" href="https://github.com/Earthii/LastCallMTL-Project"><i class="fa fa-github-square"></i></a>' +
            '<a target="_blank" href="http://www.lastcallmtl.xyz/"><i class="fa fa-external-link-square"></i></a>',
          date: 'July 2016'
        },
        {
          filter: 'freelance',
          title: 'Restaurant BBQ Thaison',
          image: '../../assets/images/projects/restobbqthaison.png',
          description: 'Located near Jean-Talon Metro, I developed a website for Thaison that has the best Chinese BBQ restaurant in Montreal. ' +
            '<a target="_blank" href="http://restobbqthaison.ca/"><i class="fa fa-external-link-square"></i></a>',
          date: 'December 2015'
        },
        {
          filter: 'school',
          title: 'Rental MTL',
          image: '../../assets/images/projects/rentalmtl.png',
          description: 'As my first web project, it taught me how to use Bootstrap and JQuery. The project was based on helping ' +
            'tenants with landlords match or vice versa.',
          date: 'April 2015'
        },
        {
          filter: 'school',
          title: 'Mytinerary',
          image: '../../assets/images/projects/mytinerary.png',
          description: 'In a team of 12, this software process project challenged us to produce a course scheduling application and ' +
            'course sequence planner. It is implemented with CodeIgniter, Bootstrap, and JQuery. ' +
            '<a target="_blank" href="https://github.com/ghiobi/anotherone"><i class="fa fa-github-square"></i></a>',
          date: 'April 2016'
        },
        {
          filter: 'personal',
          title: '3D Printed Variable Power Supply',
          image: '../../assets/images/projects/powersupply.png',
          description: 'Powering up to 45 watts, I designed a small power supply to power up any small device.',
          date: 'November 2015'
        },
        {
          filter: 'school',
          title: 'RoomM8',
          image: '../../assets/images/projects/roomm8.png',
          description: 'RoomM8 is a small reservation system used by students to book available study rooms online. ' +
            'Implemented with AngularJS, ExpressJS, MySQL, Bootstrap and Socket.IO.' +
            '<a target="_blank" href="https://github.com/ghiobi/roomm8"><i class="fa fa-github-square"></i></a>',
          date: 'November 2016'
        },
        {
          filter: 'freelance',
          title: 'Valori',
          image: '../../assets/images/projects/valori.png',
          description: 'I worked with Valori for a couple of months to come up with a software solution for the ' +
            'insurance broker company.',
          date: 'July - November 2016'
        },
        {
          filter: 'personal',
          title: 'Switch Box',
          image: 'http://placehold.it/350x250',
          description: 'Wouldn\'nt it be great to get into bed and then turn off the lights? I thought so. With this switch box ' +
            'made with Arduino, I was capable of assembling a gadget that allowed me to control any appliance with a double clap.',
          date: 'August 2015'
        },
        {
          filter: 'school',
          title: 'Classical Risk Game',
          image: 'http://placehold.it/300x200',
          description: 'Implemented in pure C++, it is a console game with structural and behavioral patterns. ' +
            '<a target="_blank" href="https://github.com/ghiobi/RiskGame"><i class="fa fa-github-square"></i></a>',
          date: 'September 2015 - December 2015'
        }
      ];
  }

}
