// A function to convert given JSON in a structure d3.hierarchy can properly visualize
// JSON key-value pairs will be converted to a parent-child relationship using name and children structure
export function ToJsonTree(json, rootName) {

  // final converted JSON
  let JsonTree = {
    "name": rootName,
    "value": "children count: " + Object.keys(json).length,
    "children": [],
  };
  
  for (let key in json) {

    let currentObj = {
      "name": key,
    };

    // nested nodes if inner element is an array
    if (json[key] instanceof Array) {
      currentObj.value = "children count: " + json[key].length;
      currentObj.children = json[key].map((item, index) => {
        return {
          "name": `${key}[${index}]`,
          "value": item,
        };
      });
      JsonTree.children.push(currentObj);
    }

    // nested nodes if inner element is JSON itself
    else if (json[key] instanceof Object) {
      JsonTree.children.push(ToJsonTree(json[key], key));
    }

    else {
      currentObj.value = json[key];
      JsonTree.children.push(currentObj);
    }
  }

  return JsonTree;
}