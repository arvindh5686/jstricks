# jstricks

Debugging javascript


https://raygun.io/blog/2015/06/useful-javascript-debugging-tips-you-didnt-know/?utm_source=JSNewsletter25&utm_medium=SponsoredLink&utm_campaign=CooperPressSept15

=======================================================================================================================================

AMD, RequireJs, CommonJS

http://stackoverflow.com/questions/16521471/relation-between-commonjs-amd-and-requirejs

=======================================================================================================================================
function test() {	
  var i=0;
	var interval = setInterval(function() {
  	console.log(i++);
    if(i==5) clearInterval(interval);
  }, 1000);
}

test();

=======================================================================================================================================
