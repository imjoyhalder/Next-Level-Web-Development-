
# 📘 TypeScript Data Types

TypeScript is a strongly typed superset of JavaScript.  
It supports two main categories of data types:

> 🧩 **1. Primitive Types**  
> 📦 **2. Non-Primitive (Reference) Types**

---

## 🧱 1. Primitive Data Types

Primitive types are **basic, immutable values** — directly stored in memory.

| Type | Description | Example |
|------|--------------|----------|
| `string` | Textual data | `"Joy"`, `'TypeScript'` |
| `number` | Integer or floating-point numbers | `25`, `3.14` |
| `boolean` | True or False values | `true`, `false` |
| `null` | Empty or no value | `null` |
| `undefined` | Value not assigned | `undefined` |
| `symbol` | Unique identifier | `Symbol("id")` |
| `bigint` | Large integer numbers | `100n` |

### 💡 Example
```ts
let name: string = "Joy";
let age: number = 21;
let isAdmin: boolean = false;
let nothing: null = null;
let notDefined: undefined = undefined;
let uniqueId: symbol = Symbol("userId");
let bigNum: bigint = 9007199254740991n;
```

---

## 📦 2. Non-Primitive (Reference) Data Types

Non-Primitive types are **reference-based** — meaning variables store the **memory address** of the value.

| Type | Description | Example |
|------|--------------|----------|
| `object` | Collection of key-value pairs | `{ name: "Joy", age: 21 }` |
| `array` | List of items | `[1, 2, 3]` |
| `tuple` | Fixed-length, typed array | `[string, number]` |
| `function` | Reusable block of code | `(a: number, b: number) => number` |
| `class` | Blueprint for creating objects | `class Student { ... }` |
| `enum` | Named constant values | `enum Color { Red, Green, Blue }` |

### 💡 Example
```ts
// Object
let person: { name: string; age: number } = { name: "Joy", age: 21 };

// Array
let numbers: number[] = [1, 2, 3, 4];

// Tuple
let user: [string, number] = ["Joy", 21];

// Function
function add(a: number, b: number): number {
  return a + b;
}

// Enum
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Green;

// Class
class Student {
  constructor(public name: string, public age: number) {}
}
const s1 = new Student("Joy", 21);
```

---

## ⚖️ Primitive vs Non-Primitive

| Feature | Primitive | Non-Primitive |
|----------|------------|----------------|
| **Stored as** | Value | Reference |
| **Mutable?** | ❌ Immutable | ✅ Mutable |
| **Copied by** | Value | Reference |
| **Examples** | string, number, boolean | object, array, function |

---

### 🧮 Example: Value vs Reference

```ts
// Primitive
let a = 5;
let b = a;
b = 10;
console.log(a); // 5  → Copy by value

// Non-Primitive
let obj1 = { name: "Joy" };
let obj2 = obj1;
obj2.name = "Halder";
console.log(obj1.name); // "Halder" → Copy by reference
```

---

## 🧠 Summary

- **Primitive types** → single, immutable values.  
- **Non-Primitive types** → reference to objects or collections.  
- **TypeScript** provides static typing for both, reducing bugs and improving code clarity.

---

✅ *Author:* **Joy Halder**  
🕹 *Topic:* *TypeScript — Primitive & Non-Primitive Data Types*
