
self.addEventListener('message', function(e) {
var r = e.data;
var n = 1;
  search: while (n<r) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    postMessage(n);
  }
 },false);