// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elements = [];

  var checkClass = function(element) {

    // element.classList: whitespace won't have classList
  	if (element.classList !== undefined && element.classList.contains(className)) {
  		elements.push(element);
  	}

  	for (var i = 0; i < element.childNodes.length; i++) {
  		checkClass(element.childNodes[i]);
  	}
  }

  checkClass(document.body);
  return elements;
};
