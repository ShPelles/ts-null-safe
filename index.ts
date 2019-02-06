type Nullable<T> = T | null | undefined;
type Key = string | number | symbol;

export class NullSafe {

    static get<T, K0 extends keyof T>(obj: Nullable<T>, k0: K0): Nullable<T[K0]>;
    static get<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>>(obj: Nullable<T>, k0: K0, k1: K1): Nullable<NonNullable<T[K0]>[K1]>;
    static get<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>>(obj: Nullable<T>, k0: K0, k1: K1, k2: K2): Nullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>;
    static get<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>, K3 extends keyof NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>>(obj: Nullable<T>, k0: K0, k1: K1, k2: K2, k3: K3): Nullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>;
    static get<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>, K3 extends keyof NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>, K4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>>(obj: Nullable<T>, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4): Nullable<NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>[K4]>;
    static get(obj: any, ...keys: Key[]) {
        let result: any = obj;

        for (let index = 0; index < keys.length; index++) {
            if (result === null || result === undefined) { return result; }
            result = result[keys[index]];
        }

        return result;
    }

    static default<T, K0 extends keyof T>(obj: Nullable<T>, k0: K0, _default:  T[K0]): T[K0];
    static default<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>>(obj: Nullable<T>, k0: K0, k1: K1, _default:  NonNullable<T[K0]>[K1]): NonNullable<T[K0]>[K1];
    static default<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>>(obj: Nullable<T>, k0: K0, k1: K1, k2: K2, _default:  NonNullable<NonNullable<T[K0]>[K1]>[K2]): NonNullable<NonNullable<T[K0]>[K1]>[K2];
    static default<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>, K3 extends keyof NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>>(obj: Nullable<T>, k0: K0, k1: K1, k2: K2, k3: K3, _default:  NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]): NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3];
    static default<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>, K3 extends keyof NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>, K4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>>(obj: Nullable<T>, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, _default:  NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>[K4]): NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>[K4];
    static default(obj: any, ...keys: Key[]) {
        const _default = keys.pop();
        const result = this.get(obj, ...keys as [Key, Key, Key, Key, Key]);
        if (result === undefined || result === null) { return _default };
        return result;
    }

    static set<T, K0 extends keyof T>(obj: T, k0: K0, value: T[K0]): void;
    static set<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>>(obj: T, k0: K0, k1: K1, value: NonNullable<T[K0]>[K1]): void;
    static set<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>>(obj: T, k0: K0, k1: K1, k2: K2, value: NonNullable<NonNullable<T[K0]>[K1]>[K2]): void;
    static set<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>, K3 extends keyof NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>>(obj: T, k0: K0, k1: K1, k2: K2, k3: K3, value: NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]): void;
    static set<T, K0 extends keyof T, K1 extends keyof NonNullable<T[K0]>, K2 extends keyof NonNullable<NonNullable<T[K0]>[K1]>, K3 extends keyof NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>, K4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>>(obj: T, k0: K0, k1: K1, k2: K2, k3: K3, k4: K4, value: NonNullable<NonNullable<NonNullable<NonNullable<T[K0]>[K1]>[K2]>[K3]>[K4]): void;
    static set(obj: any, ...keys: string[]) {
        let value = keys.pop();
        let result: any = obj;

        for (let index = 0; index < keys.length - 1; index++) {
            result[keys[index]] = result[keys[index]] || {};
            result = result[keys[index]];
        }
        result[keys.pop()!] = value;
    }
}


NullSafe.default({ a: { b: 3 } }, 'a', 'b', 45);