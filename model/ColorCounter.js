function ColorCounter (colorName, color, count) {
	var values = {
    colorName: colorName,
    color: color,
    count: count || 0
  }, actions = [];
	
	this.countIncrement = function () {
    values.count++;
    makeActions();
	};
	
	this.toJSON = function () {
    var json = {};
    for (let key in values) {
      json[key] = values[key];
    }
    return json;
	};
  
  this.get = function (prop) {
    return values[prop];
  };
  
  this.addActionOnUpdate = function (func) {
    actions.push(func);
  };
	
  function makeActions () {
    actions.forEach(func => func());
  }
  
	return this;
}