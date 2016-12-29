ProjectCtrl.$inject = ['$scope', '$sce'];

function ProjectCtrl($scope, $sce) {

  $scope.projects = [
    {
      filter: 'school',
      title: 'Super - Ride Sharing',
      image: require('../../assets/images/projects/super.png'),
      description: $sce.trustAsHtml('Super is a ride sharing app that lets users post or find rides from all over Canada. ' +
        'It is implemented with Bootstrap, Laravel, and the Google Geocoding API.' +
        '<a target="_blank" href="https://github.com/ghiobi/Everest-353"><i class="fa fa-github-square"></i></a>' +
        '<a target="_blank" href="http://super.laurendylam.com"><i class="fa fa-external-link-square"></i></a>'),
      date: 'November 2016'
    },
    {
      filter: 'personal',
      title: 'LastCallMTL',
      image: require('../../assets/images/projects/lastcallmtl.png'),
      description: $sce.trustAsHtml('Currently in development, LastCallMtl brings ease to organizing and joining events in Montreal. ' +
        'It is implement with Bootstrap, CodeIgniter and JQuery with collaboration with 3 other teammates.' +
        '<a target="_blank" href="https://github.com/Earthii/LastCallMTL-Project"><i class="fa fa-github-square"></i></a>' +
        '<a target="_blank" href="http://www.lastcallmtl.xyz/"><i class="fa fa-external-link-square"></i></a>'),
      date: 'July 2016'
    },
    {
      filter: 'freelance',
      title: 'Restaurant BBQ Thaison',
      image: require('../../assets/images/projects/restobbqthaison.png'),
      description: $sce.trustAsHtml('Located near Jean-Talon Metro, I developed a website for Thaison that has the best Chinese BBQ restaurant in Montreal. ' +
        '<a target="_blank" href="http://restobbqthaison.ca/"><i class="fa fa-external-link-square"></i></a>'),
      date: 'December 2015'
    },
    {
      filter: 'school',
      title: 'Rental MTL',
      image: require('../../assets/images/projects/rentalmtl.png'),
      description: $sce.trustAsHtml('As my first web project, it taught me how to use Bootstrap and JQuery. The project was based on helping ' +
        'tenants with landlords match or vice versa.'),
      date: 'April 2015'
    },
    {
      filter: 'school',
      title: 'Mytinerary',
      image: require('../../assets/images/projects/mytinerary.png'),
      description: $sce.trustAsHtml('In a team of 12, this software process project challenged us to produce a course scheduling application and ' +
        'course sequence planner. It is implemented with CodeIgniter, Bootstrap, and JQuery. ' +
        '<a target="_blank" href="https://github.com/ghiobi/anotherone"><i class="fa fa-github-square"></i></a>'),
      date: 'April 2016'
    },
    {
      filter: 'personal',
      title: '3D Printed Variable Power Supply',
      image: require('../../assets/images/projects/powersupply.png'),
      description: $sce.trustAsHtml('Powering up to 45 watts, I designed a small power supply to power up any small device.'),
      date: 'November 2015'
    },
    {
      filter: 'school',
      title: 'RoomM8',
      image: require('../../assets/images/projects/roomm8.png'),
      description: $sce.trustAsHtml('RoomM8 is a small reservation system used by students to book available study rooms online. ' +
        'Implemented with AngularJS, ExpressJS, MySQL, Bootstrap and Socket.IO.' +
        '<a target="_blank" href="https://github.com/ghiobi/roomm8"><i class="fa fa-github-square"></i></a>'),
      date: 'November 2016'
    },
    {
      filter: 'freelance',
      title: 'Valori',
      image: require('../../assets/images/projects/valori.png'),
      description: $sce.trustAsHtml('I worked with Valori for a couple of months to come up with a software solution for the ' +
        'insurance broker company.'),
      date: 'July - November 2016'
    },
    {
      filter: 'personal',
      title: 'Switch Box',
      image: 'http://placehold.it/350x250',
      description: $sce.trustAsHtml('Wouldn\'nt it be great to get into bed and then turn off the lights? I thought so. With this switch box ' +
        'made with Arduino, I was capable of assembling a gadget that allowed me to control any appliance with a double clap.'),
      date: 'August 2015'
    },
    {
      filter: 'school',
      title: 'Classical Risk Game',
      image: 'http://placehold.it/300x200',
      description: $sce.trustAsHtml('Implemented in pure C++, it is a console game with structural and behavioral patterns. ' +
        '<a target="_blank" href="https://github.com/ghiobi/RiskGame"><i class="fa fa-github-square"></i></a>'),
      date: 'September 2015 - December 2015'
    }
  ];

  var grid = null;
  var Isotope = require('isotope-layout');
  var ImagesLoaded = require('imagesloaded/imagesloaded.pkgd.js');
  var gridElement = document.querySelector('.projects-grid');

  // init Isotope after all images have loaded
  new ImagesLoaded(gridElement, function() {
    setTimeout(function () {
      grid = new Isotope(gridElement, {
        itemSelector: '.project-item',
        layoutMode: 'masonry'
      });
    }, 800);
  });

  var filters = document.querySelectorAll('.project-filters > .filter');
  Array.prototype.forEach.call(filters, function (element) {
    element.addEventListener('click', function (event) {
      var active = document.querySelector('.project-filters > .filter.is-active');

      //Remove active filter class list
      if (active.classList)
        active.classList.remove('is-active');
      else
        active.className = el.className.replace(new RegExp('(^|\\b)' + 'is-active'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

      //Add class
      if (element.classList)
        element.classList.add('is-active');
      else
        element.className += ' is-active';

      grid.arrange({filter: element.getAttribute('data-filter')});
    })
  });

}

module.exports = ProjectCtrl;