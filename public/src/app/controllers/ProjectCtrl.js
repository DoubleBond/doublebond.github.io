ProjectCtrl.$inject = ['$scope'];

function ProjectCtrl($scope) {

  var Isotope = require('isotope-layout');
  var ImagesLoaded = require('imagesloaded/imagesloaded.pkgd.js');

  var grid_element = document.querySelector('.projects-grid');

  var grid = null;

  new ImagesLoaded(grid_element, function() {
    // init Isotope after all images have loaded
    grid = new Isotope(grid_element, {
      itemSelector: '.project-item',
      layoutMode: 'masonry'
    });
  });

  var filters = document.querySelectorAll('.project-filters > .filter');
  for(var i = 0; i < filters.length; i++){
    filters[i].addEventListener('click', function (element) {
      angular.element(filters).removeClass('is-active');

      var filter = angular.element(element.target.parentElement);
      filter.addClass('is-active');

      grid.arrange({ filter: filter.attr('data-filter') });
    })
  }
}

module.exports = ProjectCtrl;