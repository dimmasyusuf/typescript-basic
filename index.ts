/* TYPESCRIPT BASIC */

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

let testStringOrNumber: string | number;
// testStringOrNumber = false; // Type 'boolean' is not assignable to type 'string | number'.
testStringOrNumber = 'clarila';
testStringOrNumber = 22;

/* ARRAY */

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

/* OBJECTS */

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

/* ANY */

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

/* FUNCTIONS */

const returnString = (): string => {
  return 'hello typescript';
};

const multiple = (num: number) => {
  return num * 2;
};

const multiple2 = (num: number): number => {
  return num * 2;
}; // exactly same as multiple1

const multiple3 = (num: number): void => {
  // return num * 2;
  // do something but don't return
};

const sum = (a: number, b: number, another?: number) => {
  return a + b;
};

sum(4, 5);

const userFunc = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

/* TYPE ALIASES */

type UserType = {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

const betterUser = (user: UserType) => {
  console.log(user.username);
};

type testFunc = (a: number, b: string) => void;

const write: testFunc = (num, str) => {
  console.log(num + 'times' + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: 'dark' | 'light';
};

const userWithTheme: UserType2 = {
  username: 'dimas',
  age: 23,
  theme: 'light',
};

/* INTERFACES */

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const employee: IEmployee = {
  username: 'dimmasyusuf',
  email: 'dimasyusufqurohman@gmail.com',
  age: 23,
  employeeId: 1,
};

const client: IUser = {
  username: 'clarilawm',
  email: 'cmaylenna28@gmail.com',
  age: 22,
};

/* GENERICS */
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<string> = {
  id: 1,
  title: 'post title',
  desc: 'post desc',
  extra: ['str', 'str2'],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: 'post title',
  desc: 'post desc',
  extra: [{ id: 23, username: 'dimmasyusuf' }],
};

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title: 'post title',
  desc: 'post desc',
  extra: [{ id: 23, title: 'foods' }],
};
