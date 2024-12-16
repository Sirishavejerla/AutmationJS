function userDetails (jsonString) {
    const user = JSON.parse(jsonString);

    console.log("Name:", user.name);
    console.log("City:", user.city);
    console.log("Age:", user.age);


}

//jsonstring
const jsonStrings = '{"name": "John", "age": 25, "city": "New York"}';
//calling the function
userDetails(jsonStrings);



//Convert JavaScript Object to JSON

const product = {
    nameoftheproduct : "Lappy",
    price : "9000",
    inStoc : true
}
//converting to json data
const jsonString = JSON.stringify(product);

console.log(jsonString);


//Modify a JSON Object:

let users = {
    nameofthecandiate : "Alice",
    age : "30",
};

users.gender = "Female";

console.log(users)


//Iterate Over JSON Array:
function expensiveItems (items) {
    //foreach is a method to for looping through arrays in JavaScript.
    items.forEach(item => {
        // Check the price is greater than 5
        if (item.price >= 5) {
            // Print the name of the item
            console.log(item.name);
        }
    });
}

const  itemsArray = [
    {"id": 1, "name": "Book", "price": 10},
    {"id": 2, "name": "Pen", "price": 2},
    {"id": 3, "name": "Notebook", "price": 5}
]

expensiveItems(itemsArray)

//Filter JSON Data:
function filterActiveUsers(users) {
    // Use the filter method to return only users with isActive: true
    return users.filter(user => user.isActive === true);
}

const usersArray = [
    {"name": "John", "isActive": true},
    {"name": "Jane", "isActive": false},
    {"name": "Doe", "isActive": true}
]
// call the function to get only active users
const activeUsers = filterActiveUsers(usersArray);
const filteredData = JSON.stringify(activeUsers)

console.log(filteredData);

//Nested JSON Parsing & Error Handling with JSON:
function printCityAndState(string) {
    // Parse the JSON string into a JavaScript object

    try {
        // Parse the JSON string into a JavaScript object
        const parsedData = JSON.parse(jsonString);

        // Check if user and address are defined
        if (parsedData && parsedData.user && parsedData.user.address) {
            // Access the city and state from the nested structure
            const city = parsedData.user.address.city;
            const state = parsedData.user.address.state;

            // Print the city and state        
            console.log("City:", city);
            console.log("State:", state);
        } else {
            console.log("Error: user or address data is missing.");
        }
    } catch (error) {
        console.log("Error parsing JSON:", error);
    }
}


// Given JSON string
const string = {"user": {"id": 101,"name": "Jane","address": {"city": "Boston","state": "MA"}}};

// Call the function to print the city and state
printCityAndState(string);




//Merge Two JSON Objects: Given two JSON objects:Write a function to merge them into one JSON object.
function mergeJSONObjects(obj1, obj2) {
    // Merge obj1 and obj2 using Object.assign()
    const mergedObject = Object.assign({}, obj1, obj2);
    /* Merge obj1 and obj2 using the spread operator
    const mergedObject = {...obj1, ...obj2}; */
    return mergedObject;
}

const jsonObj1 = {"name": "John", "age": 25};
const jsonObj2 = {"city": "New York", "country": "USA"};
 

const merged = mergeJSONObjects(jsonObj1, jsonObj2);

// Log the merged result
console.log(merged);


//Transform JSON Array: Given a JSON array:Write a function to transform it into:

function transformJSONArray(array) {
    // Initialize an empty object to store the transformed result
    const result = {};

    // Iterate over the array and add each id-value pair to the object
    array.forEach(item => {
        result[item.id] = item.value;
    });

    return result;
}

// Given JSON array
const jsonArray = [
    {"id": 1, "value": 10},
    {"id": 2, "value": 20},
    {"id": 3, "value": 30}
];

// Call the function to transform the array into an object
const transformedObject = transformJSONArray(jsonArray);

// Log the transformed object
console.log(transformedObject);







