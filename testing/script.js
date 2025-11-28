let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(array) {
    array.sort((a,b) => a.age - b.age)
    return array
}


console.log(sortByAge(arr));

