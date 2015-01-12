var albumApp = angular.module('albumApp', []);

var albums = [
  { id: 1, title: "The Blue Album", url: "img/icons/1-cover.jpg", numPhotos: 196 },
  { id: 2, title: "The Black Album", url: "img/icons/ex1.png", numPhotos: 0 },
  { id: 3, title: "The White Album", url: "img/icons/ex1.png", numPhotos: 0 }
];

albumApp.controller('listPhotos', function($scope, $compile) {
  var output = "";
  this.foo = function( albumId, numPhotos ) {
  var backButton = $('#back-btn').length;
  
  if ( backButton ){
    $('#back-btn').replaceWith($compile('<a id="back-btn" href="#" ng-click="list.init()" class="ui-link ui-btn-left ' + 
                                     'ui-btn ui-shadow ui-corner-all" data-role="button" ' + 
                                     'role="button">&#9664;</a>')($scope));
  } else {
    $('#menu-button').after($compile('<a id="back-btn" href="#" ng-click="list.init()" class="ui-link ui-btn-left ' + 
                                     'ui-btn ui-shadow ui-corner-all" data-role="button" ' + 
                                     'role="button">&#9664;</a>')($scope));
  }
      output = "";
      var filepath;
      output += '<div class="album-photos-wrapper">';
      for (var i=1; i<=30; i++) {
        filepath = 'img/photos/1-' + i + '.jpg';
        output += '<div ng-click="list.displayPhoto(' + albumId + ', ' + numPhotos + ', \'' + filepath + 
                  '\')"><img class="album-photos-thumbs" src="' + filepath + '"></div>';

        /*output += '<div class="album-photos-thumbs" style="background-color:#000; background:url(' + filepath + ') no-repeat; background-size:contain; background-position:center center" ng-click="list.displayPhoto(' + albumId + ', ' + numPhotos + ', \'' + filepath + 
                  '\')"></div>';*/

      }
      output += "</div>";
      var answer = $compile(output)($scope);
      
      $('#main-viewport').html( answer );
  },

  this.displayPhoto = function( albumId, numPhotos, filepath) {
    var backButton = $('#back-btn');
    if (backButton) {
      backButton.replaceWith($compile('<a id="back-btn" href="#" ng-click="list.foo(' + albumId + ',' + 
                                          numPhotos + ')" class="ui-link ui-btn-left ' + 
                                          'ui-btn ui-shadow ui-corner-all" data-role="button" ' + 
                                          'role="button">&#9664;</a>')($scope));
    }

    document.getElementById('main-viewport').innerHTML = '<img class="view-mode-img" src="' + filepath + '">';
    //document.getElementById('main-viewport').innerHTML = 
  },



  this.init = function () {
    var output = "";
    for( var key in albums ) {
      output += '<div ng-click="list.foo(' + albums[key].id +
                ',' + albums[key].numPhotos +')" class="home-menu-item">' +
                '<img class="home-menu-item-thumbnail"' + ' src="' + 
                albums[key].url + '"><p class="home-menu-item-title">' +
                albums[key].title + '</p></div>';
    }
    output = $compile(output)($scope);
    
    $('#left-panel, #main-viewport').html(output);
    
  };

this.init();


});


$( document ).on( "pageinit", "#demo-page", function() {
    $( document ).on( /*swipeleft*/ "swiperight", "#demo-page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            /*if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else*/ if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});


