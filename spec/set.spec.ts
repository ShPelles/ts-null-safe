import { NullSafe } from "../index";

describe('set()', () => {
    describe('should works with 1 to 5 keys', () => {
        it('one key', () => {
            const obj = {} as any
            NullSafe.set(obj, 'a', 42);
            expect(obj).toEqual({ a: 42 });
        });
        it('two keys', () => {
            const obj = {} as any
            NullSafe.set(obj, 'a', 'b', 42);
            expect(obj).toEqual({ a: { b: 42 } });
        });
        it('three keys', () => {
            const obj = {} as any
            NullSafe.set(obj, 'a', 'b', 'c', 42);
            expect(obj).toEqual({ a: { b: { c: 42 } } });
        });
        it('four keys', () => {
            const obj = {} as any
            NullSafe.set(obj, 'a', 'b', 'c', 'd', 42);
            expect(obj).toEqual({ a: { b: { c: { d: 42 } } } });
        });
        it('five keys', () => {
            const obj = {} as any
            NullSafe.set(obj, 'a', 'b', 'c', 'd', 'e', 42);
            expect(obj).toEqual({ a: { b: { c: { d: { e: 42 } } } } });
        });
    });

    describe('should works with arrays', () => {
        it('arrays inside objects and vice versa', () => {
            const obj1 = [{ a: [1] }];
            const obj2 = { a: [{ b: 2 }] };
            NullSafe.set(obj1, 0, 'a', 0, 42);
            NullSafe.set(obj2, 'a', 0, 'b', 42);
            expect(obj1[0].a[0]).toBe(42);
            expect(obj2.a[0].b).toBe(42);
        });
        
        it('when the array not exists', () => {
            const obj = [] as any
            NullSafe.set(obj, 1, 2, 'a', 0, 42);
            expect(obj).toEqual([, [, , { a: [42] }]]);
        });

    });
});