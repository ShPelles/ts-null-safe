import { NullSafe } from "../index";

describe('get()', () => {
    describe('should works with 1 to 5 keys', () => {
        it('one key', () => {
            const obj = { a: 42 };
            const actual = NullSafe.get(obj, 'a');
            expect(actual).toBe(42);
        });
        it('two keys', () => {
            const obj = { a: { b: 'the answer' } };
            const actual = NullSafe.get(obj, 'a', 'b');
            expect(actual).toBe('the answer');
        });
        it('three keys', () => {
            const obj = { a: { b: { c: 42 } } };
            const actual = NullSafe.get(obj, 'a', 'b', 'c');
            expect(actual).toBe(42);
        });
        it('four keys', () => {
            const obj = { a: { b: { c: { d: 'the answer' } } } };
            const actual = NullSafe.get(obj, 'a', 'b', 'c', 'd');
            expect(actual).toBe('the answer');
        });
        it('five keys', () => {
            const obj = { a: { b: { c: { d: { e: 42 } } } } };
            const actual = NullSafe.get(obj, 'a', 'b', 'c', 'd', 'e');
            expect(actual).toBe(42);
        });
    });

    describe('should works with arrays', () => {
        it('with chained arrays', () => {
            const obj = [[[[[7]]]]];
            const actual1 = NullSafe.get(obj, 0, 0, 0, 0, 0);
            const actual2 = NullSafe.get(obj, 1, 2, 3, 4, 5);
            expect(actual1).toBe(7);
            expect(actual2).toBe(undefined);
        });

        it('when array not exists', () => {
            const obj = [] as number[][][][][];
            const actual = NullSafe.get(obj, 0, 0, 0, 0, 0);
            expect(actual).toBe(undefined);
        });

        it('arrays inside objects and vice versa', () => {
            const obj1 = [{ a: [1] }];
            const obj2 = { a: [{ b: 2 }] };
            const actual1 = NullSafe.get(obj1, 0, 'a', 0);
            const actual2 = NullSafe.get(obj2, 'a', 0, 'b');
            expect(actual1).toBe(1);
            expect(actual2).toBe(2);
        });
    });
});