var arr = ["this", "is", "an","array"];

var obj = {
    description:"This is an object",
    country:"France"
}

// Array

console.log('first element of an array at index 0, so arr[0]=', arr[0]);
console.log('last eleenent od an array at index length of the array -1, arr[arr.length -1]=',arr[arr.length -1]);

console.log('push element at the end of the array with push function', arr.push("new value"));
console.log('new array: ', arr);

console.log('delete last element of an array with pop',arr.pop());
console.log('arr: ', arr)

console.log('delete at a specific index with splice(index,nb_of_element_you_want_to_delete)', arr.splice(1,1));
console.log('arr: ', arr)

console.log('delete first element with shift', arr.shift());
console.log('arr: ',arr)

//object


console.log("display the description with obj[key]: ", obj['description']);
obj['city'] = 'Paris';
console.log("Add key value element city with obj[key]= value : ",obj['city']);
delete obj.description;
console.log('delete an element with delete obj.key', obj);
