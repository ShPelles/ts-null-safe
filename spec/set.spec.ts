import { NullSafe } from "../index";

describe('set', () => {
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

    describe('work eith arrays', () => {

    });
});