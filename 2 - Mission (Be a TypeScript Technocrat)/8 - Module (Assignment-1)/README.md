##1 . Interface vs Type

TypeScript-এ interface এবং type দুটোই কোনো object-এর structure বা data-এর structure নির্ধারণ করতে ব্যবহার হয়। তবে এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

Interface একাধিক বার একই নামে declare করা যায় এবং এগুলো merge হয়ে যায়।
Type কখনো merge হয় না, একই নাম আবার দিলে error হয়।

Type দিয়ে সহজেই union এবং intersection তৈরি করা যায়। Interface union করতে পারে না
```ts
type ID = string | number;       // Union
type User = Person & Address;    // Intersection
```

Interface সহজে অন্য interface কে extend করতে পারে।
Type-এ extend নেই, তবে intersection (&) দিয়ে একই কাজ করা যায়।

```ts
interface A { name: string }
interface B extends A { age: number }
```