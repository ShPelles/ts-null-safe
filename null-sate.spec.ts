import { NullSafe } from ".";

describe('get', () => {
    it('should work with one key', () => {
        const obj = { a: 42 }
        const actual = NullSafe.get(obj, 'a');
        expect(actual).toBe(42);
    });
    it('should work with two keys', () => {
        const obj = { a: { b: 'the answer' } }
        const actual = NullSafe.get(obj, 'a', 'b');
        expect(actual).toBe('the answer');
    });
    it('should work with three keys', () => {
        const obj = { a: { b: { c: 42 } } }
        const actual = NullSafe.get(obj, 'a', 'b', 'c');
        expect(actual).toBe(42);
    });
    it('should work with four keys', () => {
        const obj = { a: { b: { c: { d: 'the answer' } } } }
        const actual = NullSafe.get(obj, 'a', 'b', 'c', 'd');
        expect(actual).toBe('the answer');
    });
    it('should work with five keys', () => {
        const obj = { a: { b: { c: { d: { e: 42 } } } } }
        const actual = NullSafe.get(obj, 'a', 'b', 'c', 'd', 'e');
        expect(actual).toBe(42);
    });
});