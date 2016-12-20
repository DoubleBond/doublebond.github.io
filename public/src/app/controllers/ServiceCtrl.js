ServiceCtrl.$inject = ['$scope'];

function ServiceCtrl($scope) {

  var Isotope = require('isotope-layout');

  new Isotope( '.projects-grid', {
    itemSelector: '.project-item',
    layoutMode: 'fitRows'
  });

}

module.exports = ServiceCtrl;