$(document).ready(function() {

            var _spacing;                //folds letter spacing of the text
            var status;                    //expanding or contracting
            var max_spacing = 10;        //maximum expansion on right
            var min_spacing = -30;        //maximum expansion on left
            var el = $('.spin');        //element to be spinned
            _spacing = parseFloat(el.css('letter-spacing'));    //get the current spacing

            //start the spin effect
            setInterval(function() {
                spin(el);
            }, 80);

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
                }, 100);
            }

            function isNumber(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

          });
