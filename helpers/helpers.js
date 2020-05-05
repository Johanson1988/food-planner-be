exports.convertToNumType = function(object) {
    for(key in object) {
        parseFloat(object[key]) >= 0 ?
            object[key] = parseFloat(object[key]) 
        : null;
    }
    return object;
}