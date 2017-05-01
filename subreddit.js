$(document).ready(function(){

  function searchReddit() {

    $.get('http://www.reddit.com/r/explainlikeimfive.json').done(function(response) {

      console.log(response.data.children[0].data);

      for(var i = 0; i < response.data.children.length; i++) {

        var title = response.data.children[i].data.title; {

            $('body').append('<div id="main"><h2 class="head"><div class="spin">' + title + '</h2></div></div>');

            var _spacing;                //folds letter spacing of the text
            var status;                    //expanding or contracting
            var max_spacing = 10;        //maximum expansion on right
            var min_spacing = -30;        //maximum expansion on left
            var el = $('.spin');        //element to be spinned
            _spacing = parseFloat(el.css('letter-spacing'));    //get the current spacing

            //start the spin effect
            setInterval(function() {
                spin(el);
            }, 100);

            function spin(el) {
                if (!isNumber(_spacing)) {
                    _spacing = 1;
                } else {
                    if (status == '+') {
                        _spacing++;
                    } else {
                        _spacing--;
                    }
                }

                if (_spacing == max_spacing) {
                    status = '-';
                } else if (_spacing == min_spacing) {
                    status = '+';
                }
                el.animate({
                    'letter-spacing': _spacing+'px'
                }, 180);
            }

            function isNumber(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }



        }
      }
    });
 }
 searchReddit();
});
