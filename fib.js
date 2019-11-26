
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



// other impl
const fibFor = n => {
    let prev = 0, next = 1;
    for(let i = 0; i < n; i++){
      let temp = next;
      next = prev + next;
      prev = temp;
    }
    return prev;
  }

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