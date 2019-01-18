// Add class to color-highlight
function addClass(string, className) {
    return '<span class="' + className + '">' + string + '</span>';
}

// Using regex to determine what kind of object it is
export function syntaxHighlight(json) {
    return json.replace(/("(\\u(\w+)|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match))
                cls = 'key';
            else
                cls = 'string';
        }
        else if (/true|false/.test(match))
            cls = 'boolean';
        else if (/null/.test(match))
            cls = 'null'
        return addClass(match, cls);
    });
}