/**
 * Equality comparer for .sort().
 * Allows to sort a number array
 * from smaller to greater.
 *
 * @param {number} a - first number
 * @param {number} b - second number
 *
 * @returns {number} difference
 */
const sortFromSmallerGreater = (a: number, b: number): number => a - b;

/**
 * Elly's balanced string problem from Top Coder.
 *
 * @see https://community.topcoder.com/stat?c=problem_statement&pm=16909
 *
 * @export
 * @class EllysBalancedStrings
 */
export class EllysBalancedStrings
{
    /**
     * Vowels ASCII codes.
     *
     * @private
     * @type {number[]}
     */
    private _vowels: number[];

    /**
     * Initializes ASCII vowels codes.
     */
    constructor()
    {
        this._vowels = this.stringToAsciiArray('AEIOU');
    }

    /**
     * Converts a string to an
     * array of it's char ASCII
     * values.
     *
     * @private
     * @param {string} str - any string
     *
     * @returns {number[]} array of char ASCII values
     */
    private stringToAsciiArray(str: string): number[]
    {
        return [ ...str ]
            .map((s: string) => s.charCodeAt(0))
            .sort(sortFromSmallerGreater);
    }

    /**
     * Returns the minimum operations count for
     * balancing the input string.
     *
     * @param {string} str - string for analyze
     * 	- should contain between 2 and 100 characters, inclusive.
     *  - should contain an even number of characters.
     *  - Each character should be an uppercase letter of the English alphabet ({'A'-'Z'}).
     * @returns {number} minimum operations for balancing
     */
    getMin(str: string): number
    {
        const asciiCodes = this.stringToAsciiArray(str);
        const middle = asciiCodes.length / 2;

        const consonants = asciiCodes
            .filter(c => !this._vowels.includes(c));

        // happy case, string is balanced
        if (middle === consonants.length)
            return 0;

        // they are more vowels chars, so
        // this is a simple case, vowels
        // can be turned into a consonant
        // with any operation once.
        if (middle > consonants.length)
            return (middle - consonants.length);

        // here most 'hard' case: are more constants.
        // calculates and sorts consonants
        // ASCII codes, so also calcs smaller
        // numeric distance to any vowel ASCII code,
        // finally returns necessary smaller distances
        // for balancing the string

        // calcs how many consonants should be converted
        const deviation = consonants.length - middle;

        // distances for every char to the closer vowel
        const distanceToVowel = consonants
            .reduce((distances: number[], asciiCode: number) =>
            {
                const localDistances: number[] = [];

                for (const vowelAsciiCode of this._vowels)
                    localDistances.push(Math.abs(vowelAsciiCode - asciiCode));

                const minDistance = localDistances
                    .sort(sortFromSmallerGreater)[0];

                distances.push(minDistance);

                return distances;
            }, [])
            .sort(sortFromSmallerGreater);

        // sums minimum distances
        return distanceToVowel
            .slice(0, deviation)
            .reduce((totalDist: number, minDist) =>
            {
                totalDist += minDist;

                return totalDist;
            }, 0);
    }
}
