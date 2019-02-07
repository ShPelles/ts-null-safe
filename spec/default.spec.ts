import { NullSafe } from "../index";

describe('default()', () => {

    it('should works well', () => {
        const obj = { a: [, { b: 'value' }] }
        const actual1 = NullSafe.default(obj, 'a', 1, 'b', 'wrong');
        const actual2 = NullSafe.default(obj, 'a', 0, 'b', 'expected');
        expect(actual1).toBe('value');
        expect(actual2).toBe('expected');
    });

});