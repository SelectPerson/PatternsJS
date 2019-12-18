function netWorkFetch(url) {
    return `${url}: Response`;

}

const cache = new Set();
const proxiedFetch = new Proxy(netWorkFetch, {
   apply(target, thisArg, args) {
       const url = args[0];
       if(cache.has(url)) {
           return `${url} Response from cache`;
       }
       else {
           cache.add(url);
           return Reflect.apply(target, thisArg, args);
       }
   }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));
