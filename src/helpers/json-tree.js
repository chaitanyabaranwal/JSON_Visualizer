// A function to convert given JSON in a structure d3.hierarchy can properly visualize
// JSON key-value pairs will be converted to a parent-child relationship using name and children structure
export function ToJsonTree(json, rootName) {

  // final converted JSON
  var JsonTree = new Object(); 
  JsonTree.name = rootName;
  JsonTree.children = [];
  
  for (var key in json) {
    var currentObj = new Object();
    currentObj.name = key;    // / add every key as 'name' to label nodes

    // nested nodes if inner element is an array
    if (json[key] instanceof Array) {
      currentObj.children = json[key].map(createObject);
      JsonTree.children.push(currentObj);
    }
    // nested nodes if inner element is JSON itself
    else if (json[key] instanceof Object)
      JsonTree.children.push(ToJsonTree(json[key], key));
    else
      JsonTree.children.push(currentObj);
  }

  return JsonTree;
}

// function to create new object
function createObject() {
  var obj = new Object();
  obj.name = 'ggg';
  return obj;
}