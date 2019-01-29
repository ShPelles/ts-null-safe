# ts-null-safe
safe deep `get` &amp; `set` methods, with type safety.

## Install

### Node.js

```
npm install ts-null-safe
```

## Usage

```typescript
import { NullSafe } from "ts-null-safe";

const obj = {
  a: {
    b: 123,
    c: ["e", "f"],
    d: undefined as { e: boolean } | undefined,
  }
};

NullSafe.get(obj, 'a', 'b'); // returns 123 as number | null | undefined
NullSafe.get(obj, 'a', 'c', 0); // returns 'e' as string | null | undefined
NullSafe.get(obj, 'a', 'd', 'e'); // returns undefined as boolean | null | undefined
NullSafe.get(obj, 'a', 'x'); // TS compilation error: Argument of type '"x"' is not assignable to parameter of type '"b" | "c" | "b"'.

NullSafe.set(obj, 'a', 'd', 'e', true); // obj.a.d is now { e: true }
NullSafe.set(obj, 'a', 'b', 'abc'); // TS compilation error: Argument of type '"abc"' is not assignable to parameter of type 'number'.

```
