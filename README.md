# Express-Routing-Lab

In this lab you will get to build a small server that can serve us as calculator for simple math operations.

## 1. Calculator API - Four Routes

### Backend

In a file `calculatorApi1.js`, create and express server that works as a basic calculator API.

* Create four routes/endpoints, `/add`, `/sub`, `/mul`, `/div`. Each of the routes will then accept two numbers as [route parameters](https://github.com/joinpursuit/Pursuit-Core-Web/tree/master/node/intro_to_express_and_routing#7-reading-parameters). 

  Here is what a route in your app would look like: `/add/:num1/:num2`


* In each route, convert the numbers to integers using `parseInt`.
* Respond to each request with an object that contains both numbers and the result.

  For example, if the users navigates to `http://localhost:8000/add/2/4`, the response should be JSON like:

  `{"num1": 2, "num2": 4, "result": 6}`

* If either of the parameters is not a number, respond with an string like "numbers only".

* If the user navigates to any other route, respond with an explanatory message about your API.

### Frontend

Build a frontend where a user can interact with your calculator server.  It should look something like this:

![calculatorGif.gif](./calculatorGif.gif)

## 2. Calculator API - One Route

In a file `calculatorApi2.js`, convert your calculator API to take the operator as a route parameter as well. Now you will only need one route. If the operator is not valid, send an appropriate response like `"the operator is not supported"`.

<details>
  <summary>Hints</summary>

  * Since you will have only one route or endpoint what would that be?
  * This calculator server/API should work exactly the same as your previous for the basic operations. But you should see that your code is much shorter.
  * How could you make the `operator` portion of the URL be a parameter itself? So that it can be captured/seen in `req.params`
</details>


## 3. Challenge - Base Conversion API

Create an express server that converts numbers between three bases: decimal, binary, and hexadecimal.

* To convert a decimal number to binary and hex:

```js
let num = 10;
num.toString(2) // '1010'
num.toString(16) // 'a'
```

* To convert binary and hex strings to decimal:

```js
let hexStr = 'a'
parseInt(hexStr, 16) // 10
let binaryStr = '1010'
parseInt(binaryStr, 2) // 10
```

* On every request, the server will expect a url of the following structure:

`localhost:8000/{number}/{bin|dec|hex}`

It will return an object that contains {number} and all conversions for {number} with the provided base.

* If only a number is provided, e.g. `localhost:8000/{number}` - assume {number} has a decimal base and return an object with all conversions.

Example 1: on url `localhost:8000/10` the server should return:

```json
{
  "original": { "value":"10", "base":10 },
  "conversions": { "decimal":"10", "binary":"1010", "hex":"a" }
}
```

Example 2: on url `localhost:8000/11/bin` the server should return

```json
{
  "original": { "value": "11", "base":2 },
  "conversions": { "decimal": "3", "binary": "11", "hex":" 3" }
}
```
