# Unhandled Error in Express.js: undefined property access in request body
This repository demonstrates a common error in Express.js applications where the application crashes due to accessing an undefined property within the request body.  The solution shows how to implement proper error handling to prevent crashes and provide meaningful responses.
## Bug
The `bug.js` file contains an Express.js application that fails to handle cases where the request body is malformed or missing required fields.  Attempting to access a non-existent property (e.g., `user.name` when the `name` property is missing) causes an unhandled exception.
## Solution
The `bugSolution.js` file corrects the issue by implementing error handling using try...catch blocks and input validation.  This approach ensures the application remains responsive and gracefully handles unexpected input.  It provides more robust error handling and better user experience.