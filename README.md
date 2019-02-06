# ts-null-safe
safe deep `get` &amp; `set` methods, with type safety.

[![NPM version](https://badge.fury.io/js/ts-null-safe.png)](http://badge.fury.io/js/ts-null-safe)
![Downloads](http://img.shields.io/npm/dm/ts-null-safe.svg)

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

NullSafe.default(obj, 'a', 'b', 456); // returns 123
NullSafe.default(obj, 'a', '5', 5, 'value'); // returns 'value'
NullSafe.default(obj, 'a' 'd', 'e', true); // returns true

NullSafe.set(obj, 'a', 'd', 'e', true); // obj.a.d is now { e: true }
NullSafe.set(obj, 'a', 'b', 'abc'); // TS compilation error: Argument of type '"abc"' is not assignable to parameter of type 'number'.

```
