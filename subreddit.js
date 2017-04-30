$(document).ready(function(){

  function searchReddit() {

    $.get('http://www.reddit.com/r/explainlikeimfive.json').done(function(response) {

      console.log(response.data.children[0].data);

      for(var i = 0; i < response.data.children.length; i++) {

        var title = response.data.children[i].data.title; {

            $('body').append('<div id="main"><h2 class="head"><div id="spin">' + title + '</h2></div></div>');
        }
      }
    });
 }
 searchReddit();
});
