// get the unique set of stocks Names
// this requires getting all the unique values 
// for the key Names from all objects in the array
d3.csv("./Data/all_stocks_5yr.csv").then(function(array) {

    console.log(array);
    console.log(array.length);
    console.log(array[0]);
    console.log(array[0].Name);

    var unique = [];
    var distinct = [];
    for (let i = 0; i < array.length; i++) {
        if (!unique[array[i].Name]) {
            distinct.push(array[i].Name);
            unique[array[i].Name] = 1;
        }
    }

    console.log(distinct);
});