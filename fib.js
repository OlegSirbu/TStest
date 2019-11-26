
// xn = xn-1 + xn-2

// recurcies
var fib = (n) => {
    if(n==1 || n==2) {
        return 1;
    }else {
        return fib(n - 1) + fib(n - 2);
    }
};
console.log(fib(7));


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