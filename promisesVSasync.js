promises:

var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
});

async-waterfall:

var fn1 = function(callback) {
            fs.stat(path, function(err, stats) {
                if (stats == undefined) { callback(null); }
                else { console.log('headers already collected'); }
            });
        }
        
var fn2 = function(callback) {
            var options = {
                host: 'www.wikipedia.org',
                port: 80
            };        
            http.get(options, function(res) {
                var headers = JSON.stringify(res.headers);
                callback(null, headers);
            });
        }
async.waterfall(
    [
        fn1,
        fn2
    ],
    function(err, headers) {
        console.log(headers);
    }
);
