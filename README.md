# Test driven development with mocha and chai

## Instructions
Write a **getPrimes** function that takes an integer value **n** as argument and generates prime numbers from 0 to 100.

## Prerequisites
Install **node.js** and **npm** by going to [https://nodejs.org/en/]. 

## Getting started with mocha and chai on another project
1. Create a working directory or folder. For example `mkdir example`.
2. On the terminal, type `npm init` and accept the default settings after pressing enter on the keyboard.
3. To install mocha and chai, type the command, `npm install --save mocha chai` and press enter on the keyboard. This installs the test and assertion libraries in the node_modules package and makes it available locally within your project. If you open the`package.json` file within your editor, you will see them listed as a dependency.
4.  Create a test folder or directory. That is `mkdir test` and also create a `test.js` file by doing `cd test` and then `touch test.js`.
5. Write the test with the test.js file. 
   for example:
   ```javascript
   var assert = require('assert');
   describe('Array', function() {
   describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});
```
## Running the test
 To run the test, Type `npm run test`
