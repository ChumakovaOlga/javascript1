
                //  8. С помощью рекурсии организовать функцию возведения
                //  числа в степень. Формат: function power(val, pow),
                //  где val – заданное число, pow – степень.

                function power(val, pow) {
                if (pow == 1) {
                return val; //число, в первой степени равно самому числу
            } else {
                return val * power(val, pow - 1);
            }
            }

                alert( power(2, 3) );


                /*  function power(val, pow) {
                var result = 1;
                // умножаем result на val pow раз в цикле
                for (  var i = 0; i < pow; i++) {
                result = result * val// result *= val;
            }
                return result;
            }
                alert( power(2, 3) ); // 8*/

                /*
                var power = (val, pow) => {
                if (pow != 1) {
                return val * power(val, pow - 1);
            } else if (pow <= 0) {
                alert("Введите число большее или равное 1");
            } else {
                return val;
            }
            }
                alert( power(2, 3) );*/




                /*  function power(val, pow) {
                if (typeof(pow) == "undefined") {
                pow = 1
            }
                if (typeof(val) == "undefined") {
                val = 1
            }
                let result = 1, i
                for(i = 1; i <= pow; i++) {
                result *= val
            }
                return result
            }
                alert("2<sup>3</sup> = "+ power(2, 3));*/


