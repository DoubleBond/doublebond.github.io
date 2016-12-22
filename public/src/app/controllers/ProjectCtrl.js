ProjectCtrl.$inject = ['$scope'];

function ProjectCtrl($scope) {

  var grid = null;
  var Isotope = require('isotope-layout');
  var ImagesLoaded = require('imagesloaded/imagesloaded.pkgd.js');
  var gridElement = document.querySelector('.projects-grid');

  // init Isotope after all images have loaded
  new ImagesLoaded(gridElement, function() {
    grid = new Isotope(gridElement, {
      itemSelector: '.project-item',
      layoutMode: 'masonry'
    });
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