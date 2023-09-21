let variable = 'hello world';
/*
variable = 23; // Type 'number' is not assignable to type 'string'.
variable = true; // Type 'boolean' is not assignable to type 'string'.
variable = undefined; // Type 'undefined' is not assignable to type 'string'.
variable = null; // Type 'null' is not assignable to type 'string'.
*/
variable = 'typescript';

let testNumber: number;
// testNumber = 'twenty'; // Type 'string' is not assignable to type 'number'.
testNumber = 23;

let testString: string;
// testString = false // Type 'boolean' is not assignable to type 'string'.
testString = 'dimas';

let testBoolean: boolean;
// testBoolean = 'true' // Type 'string' is not assignable to type 'boolean'.
testBoolean = true;

/* MULTIPLE TYPES */

let testStringOrNumber: string | number;
// testStringOrNumber = false; // Type 'boolean' is not assignable to type 'string | number'.
testStringOrNumber = 'clarila';
testStringOrNumber = 22;

// ARRAY

let names = ['dimas', 'clarila'];
// names.push(3) // Argument of type 'number' is not assignable to parameter of type 'string'.
names.push('bombom');

let numbers = [11, 22, 12, 5, 99];
// numbers.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'number'.
numbers.push(28);

let testStringArray: string[];
// testStringArray = [1, 2, 3]; // Type 'number' is not assignable to type 'string'.
testStringArray = ['one', 'two', 'three'];

let testNumberArray: number[];
// testNumberArray = [true, false, true]; // Type 'boolean' is not assignable to type 'number'.
testNumberArray = [1, 2, 3];

let testStringOrNumberArray: (string | number)[];
// testStringOrNumberArray = [1, true, 'three'] // Type 'boolean' is not assignable to type 'string | number'.
testStringOrNumberArray = ['one', 2, 3];

// OBJECTS

let user = {
  username: 'dimmasyusuf',
  age: 23,
  isAdmin: true,
};

user.username = 'clarilawm';
// user.age = 'twenty'; // Type 'string' is not assignable to type 'number'.
user.age = 22;
// user.isAdmin = 'no'; // Type 'string' is not assignable to type 'boolean'.
user.isAdmin = false;

let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};

/*
userObj = {
  username: 'clarilawm',
  age: 22,
  phone: '+12345' // Object literal may only specify known properties, and 'phone' does not exist in type.
}; // Property 'isAdmin' is missing in type
*/

userObj = {
  username: 'dimmasyusuf',
  age: 23,
  isAdmin: true,
};

let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string; // is not required.
};

userObj2 = {
  username: 'clarilawm',
  age: 22,
  isAdmin: false,
  phone: '+12345',
};

// ANY

// let testAny; // by default, the type is any.
let testAny: any;

testAny = 12;
testAny = 'hello';
testAny = true;
testAny = undefined;
testAny = null;
testAny = [];
testAny = {};

let testAnyArray: any[];

testAnyArray = [1, true, 'three', undefined, null];
