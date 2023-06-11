# JavaScript with TDD in Practice

This repository contains the code and resources for the "JavaScript with TDD in Practice" course on Udemy, taught by Willian Justen.

![Screenshot from 2023-06-11 15-33-00](https://github.com/IndianBoyBR/js-with-tdd-in-practice/assets/27955793/c0400173-6942-421f-af75-1e853c9634c1)

## Course Description

The "JavaScript with TDD in Practice" course was designed to teach me how to write high-quality JavaScript code using Test-Driven Development (TDD) practices. TDD is a software development approach that emphasized writing tests before writing the actual code. This approach helped ensure that the code was reliable, maintainable, and bug-free.

Throughout the course, I learned the fundamentals of TDD and how to apply it in JavaScript projects. I understood the benefits of TDD, such as improved code quality, faster development cycles, and easier code maintenance. The course covered various topics, including:

- Setting up the development environment with Mocha and Chai.
- Writing unit tests using Mocha and Chai.
- Implementing code to pass the tests.
- Applying TDD principles to solve real-world JavaScript challenges.
- Refactoring code to improve its quality and maintainability.

By the end of the course, I had gained practical experience in applying TDD principles to my JavaScript projects, enabling me to write cleaner, more reliable code.

## Built Using

- Mocha: A JavaScript test framework that runs on Node.js and the browser. It provides a flexible and powerful environment for writing and executing tests.
- Chai: A BDD/TDD assertion library for Node.js and the browser. It provides expressive and readable assertions to enhance the clarity and reliability of my tests.
  Here is the description of each npm command:

## Commands

- **build**: This command runs the build process for the project. It first clears the "lib" directory using the "clear" script (assuming it's defined elsewhere), and then uses the Babel compiler ("babel") to transpile the code in the "src" directory into the "lib" directory.

- **build:watch**: This command is similar to the "build" command, but it also enables the watch mode. It continuously monitors the source files for changes and automatically triggers the build process whenever a file is modified.

- **lint**: This command runs the ESLint tool ("eslint") to perform static code analysis on the JavaScript files in the "src" directory. It checks for common code style issues and potential errors based on the configured ESLint rules.

- **prepush**: This command is executed automatically before pushing changes to a remote repository. In this case, it runs the "test:coverage" command (described below) to ensure that the tests pass and generates a test coverage report.

- **test**: This command executes the tests using the Mocha test framework ("mocha"). It runs the test files in the "tests" directory with the ".spec.js" extension, using the "babel-register" module to transpile the code on-the-fly with Babel. The "--bail" option makes Mocha stop the test execution on the first failure.

- **test:watch**: Similar to the "test" command, this command also enables the watch mode. It continuously monitors the test files for changes and reruns the tests whenever a file is modified.

- **test:coverage**: This command runs the tests with the "npm test" command and generates a code coverage report using the "nyc" tool. "nyc" wraps around the test command and collects coverage information, allowing you to see how much of your code is covered by the tests.

Note: The "./node_modules/.bin/" prefix before each command is used to run the locally installed binaries of the packages specified in the project's "node_modules" directory.

## Special Thanks

Special thanks to Willian Justen for creating this course. Willian is an experienced developer and instructor who is passionate about teaching web development and sharing his knowledge with others.

## Repository Structure

The repository is structured as follows:

- `src/`: This directory contains the source code for the JavaScript projects covered in the course.
- `tests/`: This directory contains the unit tests for the JavaScript projects.
- `bin/`: This directory contains executable files or scripts related to the projects (if applicable).
