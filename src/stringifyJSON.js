// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var types = ['number', 'boolean'];

  if (types.indexOf(typeof obj) > -1 || obj === null) { return '' + obj; }
  else if (typeof obj === 'string') { return '"' + obj + '"'; }

  // Array
  else if (Array.isArray(obj)) {
	  var items = [];
		for (var i = 0; i < obj.length; i++) {
			items.push(stringifyJSON(obj[i]));
		}
		return '[' + items.join(',') + ']';
  }

  // Object
  else if (typeof obj === 'object') {
  	var properties = [];
  	for (var key in obj) {
  		var value = stringifyJSON(obj[key]);
  		if (value !== undefined) {
	  		properties.push(stringifyJSON(key) + ':' + value);
	  	}
  	}
  	return '{' + properties.join(',') + '}';
  }
};
