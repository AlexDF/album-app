var albumApp = angular.module('albumApp', []);
  /*.config( function(snapRemoteProvider) {
    snapRemoteProvider.globalOptions.disable = 'right';
  });*/
/*
var albums = [
  { title: "The Blue Album", url: "img/icons/ex1.png" },
  { title: "The Black Album", url: "img/icons/ex1.png" },
  { title: "The White Album", url: "img/icons/ex1.png" }
];*/

/*albumApp.controller('albumList', function() {
  this.


});*/



/*function init(){
  var output = "";
  for( var key in albums ) {
    output += '<div class="home-menu-item"><img class="home-menu-item-thumbnail"' +
              ' src="' + albums[key].url + '"><p class="home-menu-item-title">' +
              albums[key].title + '</p></div>';
    
  }
  document.getElementById('main-viewport').innerHTML = output;
}*/

//init();

$( document ).on( "pageinit", "#demo-page", function() {
    $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#right-panel" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel" ).panel( "open" );
            }
        }
    });
});
