
// xn = xn-1 + xn-2

// while 
function fibWhile(num){
    var a = 0, b = 1, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
    return b;
  }
fibWhile(7)