import { EllysBalancedStrings } from './ellys-balanced-strings';

describe('EllysBalancedStrings suite case', () =>
{
    let ellysBalancedString;

    beforeEach(async () =>
    {
        ellysBalancedString = new EllysBalancedStrings();
    });

    test('"TOPCODER" should returns 1', () =>
    {
        expect(ellysBalancedString.getMin('TOPCODER')).toBe(1);
    });

    test('"BANANA" should returns 0', () =>
    {
        expect(ellysBalancedString.getMin('BANANA')).toBe(0);
    });

    test('"WITHOUTITIAMJUSTESPR" should returns 2', () =>
    {
        expect(ellysBalancedString.getMin('WITHOUTITIAMJUSTESPR')).toBe(2);
    });

    test('"NOZAPHODJUSTVERYVERYIMPROBABLE" should returns 5', () =>
    {
        expect(ellysBalancedString.getMin('NOZAPHODJUSTVERYVERYIMPROBABLE')).toBe(5);
    });

    test('"SYZYGY" should returns 8', () =>
    {
        expect(ellysBalancedString.getMin('SYZYGY')).toBe(8);
    });

    test('"ABCDEFGHIJKLMNOPQRSTUVWXYZ" should returns 8', () =>
    {
        expect(ellysBalancedString.getMin('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(8);
    });
});
