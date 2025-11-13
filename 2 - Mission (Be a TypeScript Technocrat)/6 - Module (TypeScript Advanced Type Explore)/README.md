# 📘 TypeScript Notes

এই ফাইলে TypeScript এর গুরুত্বপূর্ণ কিছু কনসেপ্ট সহজভাবে ব্যাখ্যা করা আছে।  
এগুলো শেখা তোমার TypeScript, React, এবং Backend প্রোজেক্টে অনেক সাহায্য করবে।

---

## 🧩 Section 1: Interface vs Type Alias

### 🧱 মূল পার্থক্য (Basic Difference)

| বিষয় | **Interface** | **Type Alias** |
|-------|----------------|----------------|
| ব্যবহার | Object-এর structure বা contract define করতে | যেকোনো type define করতে (object, union, primitive ইত্যাদি) |
| Extend করা যায় | `extends` দিয়ে extend করা যায় | `&` (intersection) দিয়ে extend করা যায় |
| Reopen করা যায় | একাধিকবার একই নামের interface declare করে merge করা যায় | Type alias-এ এটা সম্ভব না |
| Use Case | Class, Object, API Response এর জন্য | Union, Primitive, Function type, Complex Type এর জন্য |

---

### 🧩 Interface Example

```ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Joy",
  age: 22,
  role: "superadmin"
};
```

👉 এখানে `Admin` interface, `User` কে **extends** করেছে।  
মানে `Admin` এর ভেতরে `User` এর সব property চলে আসছে।

---

### 🧩 Type Alias Example

```ts
type User = {
  name: string;
  age: number;
};

type Admin = User & {
  role: string;
};

const admin: Admin = {
  name: "Joy",
  age: 22,
  role: "superadmin"
};
```

👉 এখানে আমরা `&` ব্যবহার করে **extend** করেছি (intersection)।

---

### 🧠 Reopen করা যায় কি?

```ts
// ✅ Interface কে পুনরায় declare করে বাড়ানো যায়
interface Person {
  name: string;
}
interface Person {
  age: number;
}

const user: Person = { name: "Joy", age: 22 }; // Works fine
```

```ts
// ❌ Type alias কে এভাবে declare করা যায় না
type Person = { name: string };
type Person = { age: number }; // ❌ Error: Duplicate identifier
```

---

### ⚙️ Non-object টাইপে Type Alias-এর সুবিধা

Type alias দিয়ে শুধু object না,  
union, primitive, function সব define করা যায় 👇

```ts
type ID = string | number;
type Status = "success" | "error" | "loading";

type AddFn = (a: number, b: number) => number;
```

Interface দিয়ে এগুলো করা যায় না।

---

### 🧩 এক কথায় পার্থক্য

| বিষয় | Interface | Type Alias |
|--------|-------------|------------|
| Object এর জন্য ভালো | ✅ | ✅ |
| Union / Primitive | ❌ | ✅ |
| Extend করা যায় | ✅ (`extends`) | ✅ (`&`) |
| Reopen করা যায় | ✅ | ❌ |
| Class implement | ✅ | ✅ |

---

### ✅ কখন কোনটা ব্যবহার করবো?

| পরিস্থিতি | ব্যবহার |
|-------------|----------|
| Object বা class structure define করতে | **Interface** |
| Union, primitive বা function type define করতে | **Type Alias** |
| Mixed complex type লাগলে | **Type Alias** ভালো |

---

## 🧩 Section 2: Type Assertion in TypeScript

### 🔹 কী Type Assertion?

**Type Assertion** মানে হলো — TypeScript-কে **বলে দেওয়া** যে তুমি **একটা ভেরিয়েবলের টাইপ** সম্পর্কে নিশ্চিত, যদিও TypeScript নিজে সেটা ঠিকভাবে বুঝতে পারছে না।

👉 এটা **runtime-এ কোনো পরিবর্তন আনে না**, শুধু **compile-time type checking** এর সময় কাজ করে।

---

### 🧠 সিনট্যাক্স (Syntax)

দুইভাবে লেখা যায় 👇

#### ✅ `as` ব্যবহার করে (Recommended)
```ts
let value: unknown = "Hello TypeScript";
let length = (value as string).length;
```

#### ✅ `<type>` ব্যবহার করে
```ts
let value: unknown = "Hello TypeScript";
let length = (<string>value).length;
```

> ⚠️ `.tsx` (React) ফাইলে `<string>` ফরম্যাট কাজ করে না, সেখানে `as` ব্যবহার করতে হয়।

---

### 📘 উদাহরণ

```ts
let someValue: any = "This is a string";

// Type assertion ছাড়া
console.log(someValue.length); // চলে, কিন্তু টাইপ সেফ না

// Type assertion দিয়ে
let strLength: number = (someValue as string).length;
console.log(strLength); // 16
```

এখানে আমরা TypeScript-কে বলছি:
> “আমি জানি এটা string, তুমি এটাকে string ধরো।”

---

### ⚙️ কখন ব্যবহার করা হয়

✅ যখন তুমি জানো TypeScript-এর চেয়ে **তুমি ভালো জানো** কোনো ভেরিয়েবলের টাইপ কী।  
✅ যেমন — **DOM element**, **API response**, **JSON data** এর ক্ষেত্রে।

#### উদাহরণ:
```ts
const input = document.querySelector("#username") as HTMLInputElement;
console.log(input.value);
```

এখানে TypeScript জানে না `#username` একটা input কিনা, কিন্তু তুমি জানো — তাই তুমি বললে, “এটা HTMLInputElement”।

---

### 🧩 JSON উদাহরণ

```ts
const data = '{"name": "Joy", "age": 22}';
const user = JSON.parse(data) as { name: string; age: number };

console.log(user.name); // Joy
```

---

### 🚫 Type Assertion কী না

- এটা **type casting না** — runtime এ কোনো ডেটা পরিবর্তন হয় না।  
- এটা শুধু **TypeScript compiler** কে গাইড দেয়।

---

## 📚 Summary

| বিষয় | ব্যাখ্যা |
|------|----------|
| **Interface vs Type Alias** | Object structure define করার জন্য দুইটা উপায়, কিন্তু type alias দিয়ে আরও flexible কাজ করা যায় |
| **Type Assertion** | TypeScript-কে বলা হয় “আমি জানি এই ভ্যালুর টাইপ কী” — compile-time check এর জন্য |

---

**Author:** Joy Halder  
**Topic:** TypeScript Core Concepts  
**Date:** 🗓️ November 2025  
**Tags:** `#typescript` `#interface` `#type-alias` `#type-assertion`
