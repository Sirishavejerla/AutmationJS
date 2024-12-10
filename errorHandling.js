/* This is the try block.
This is the catch block: Something went wrong
This is the finally block. It always runs.*/
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
   
    let result = divide(10, 0);
    console.log("Result:", result);
  } catch (error) {
    // Handle the error by logging the error message
    console.log("Error:", error.message);
  } finally {
    // This block will run regardless of whether an error occurred or not
    console.log("Operation complete");
  }
  