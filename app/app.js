var albumApp = angular.module('albumApp', ['snap'])
  .config( function(snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
  });


