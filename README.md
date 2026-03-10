Project Structure
javascript-practice/
│
├── 01-variables/
├── 02-conditionals/
├── 03-functions/
├── 04-arrays/
├── 05-array-methods/
├── 06-objects/
├── 07-dom/
├── 08-forms/
└── 09-local-storage/

Each folder contains practice problems and solutions related to that concept.

1. Variables & Data Types
Task 1 – User Profile Generator

Create variables to store:

Name

Age

City

Student status

Expected Output

Hello John!
You are 21 years old and live in Bangalore.
Student status: Yes

Concepts practiced

let

const

Template literals

Primitive data types

Task 2 – Online Order Price

Store:

Product price

Quantity

Delivery charge

Calculate the total bill.

Example:

Product Price: 500
Quantity: 2
Delivery: 50

Total Bill: 1050

Concepts

Numbers

Arithmetic operators

Variables

2. Operators & Conditionals
Task 3 – Login Access System

Check login credentials.

username = "admin"
password = "1234"

Output:

Login successful

or

Invalid credentials

Concepts

if / else

Logical operators (&&)

Comparison operators

Task 4 – Age Verification

Age conditions:

age < 18   → Not allowed
18 – 60    → Allowed
age > 60   → Senior access

Concepts

if

else if

else

Task 5 – Day Message (Switch Case)

Input day:

Monday → Work day
Saturday → Weekend vibes
Sunday → Rest day

Concept

switch
3. Functions (Important)
Task 6 – Discount Calculator

Function:

calculateDiscount(price, discountPercent)

Example:

calculateDiscount(1000,10)

Output

Final price: 900

Concepts

Parameters

Return values

Reusable functions

Task 7 – BMI Calculator

Function:

calculateBMI(weight, height)

Formula

BMI = weight / (height * height)

Output category:

Underweight
Normal
Overweight

Concepts

Functions

Conditional logic

Return values

4. Arrays
Task 8 – Shopping Cart System

Create array

["Laptop","Mouse","Keyboard"]

Tasks

Add item

Remove item

Print cart items

Concepts

Arrays

push()

pop()

splice()

Task 9 – Total Cart Price

Array

[100,200,300,400]

Calculate total bill using:

loops

Then redo using:

reduce()
5. Array Methods (Real-World)
Task 10 – Filter Expensive Products

Products

[200,500,1200,3000,150]

Return items above 1000

Concept

filter()
Task 11 – Convert Names to Uppercase

Input

["john","alice","bob"]

Output

["JOHN","ALICE","BOB"]

Concept

map()
Task 12 – Find User

Users

["ram","john","alex","sam"]

Search

"john"

Concept

find()
6. Objects
Task 13 – User Profile Object

Create object

const user = {
  name,
  age,
  email,
  isLoggedIn
}

Output

Welcome back John

Concepts

Objects

Dot notation

Task 14 – Product Object
const product = {
  name: "Phone",
  price: 20000,
  stock: 5
}

Logic

If stock = 0 → Out of stock

Concepts

Object access

Conditionals

7. DOM Basics
Task 15 – Change Text on Button Click

HTML

<button>Click</button>
<p>Hello</p>

JS

When clicked:

Welcome to my website

Concepts

querySelector

addEventListener

DOM manipulation

Task 16 – Dark Mode Toggle

Button click should:

Change background color

Change text color

Concepts

DOM styles

Events

8. Form Handling
Task 17 – Login Form Validation

Inputs

Email

Password

Rules

Email cannot be empty
Password must be at least 6 characters

Concepts

preventDefault

Form validation

Event listeners

9. Local Storage
Task 18 – Remember Username

Store username in localStorage.

When page reloads show:

Welcome back John

Concepts

localStorage

setItem

getItem

How to Use

Clone the repository

git clone https://github.com/yourusername/javascript-practice.git

Open the project

cd javascript-practice

Solve tasks in each folder.

Learning Outcome

After completing these tasks you will understand:

JavaScript fundamentals

DOM manipulation

Event handling

Form validation

Local storage

Real frontend logic
