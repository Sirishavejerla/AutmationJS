/* A Promise represents an operation that hasn't completed yet but is expected to complete in the future. It can be in one of three states:

Pending: The operation is still running.
Resolved (Fulfilled): The operation completed successfully.
Rejected: The operation failed (e.g., an error occurred).*/


function fetchUserData () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {name : "Alice", age: 25}
            resolve(userData);
        }, 2000)

    })
}

async function getUserData (){
    try {
        const userData = await fetchUserData ();
        console.log('User data:', userData);
    }catch {
        console.log('Error:', error);
    }

}

getUserData();

/*async/await: Simplifies handling asynchronous code by allowing us to write it in a synchronous-like manner.
try/catch: Used for error handling when dealing with asynchronous operations, preventing unhandled promise rejections.*/