# TOPCODER - ELLY'S STRING BALANCED PROBLEM.

In the English alphabet the letters {'A', 'E', 'I', 'O', 'U'} are called vowels while all others are called consonants. Note that in this problem 'Y' is always a consonant.

A string is balanced if the number of vowels in the string is the same as the number of consonants in the string.

For example, the string "BANANA" is balanced: it has three consonants ('B' and two 'N') and three vowels (three 'A'). The string "TOPCODER" is not balanced: it has five consonants but only three vowels.

Elly has a String S. The length of S is even.

The girl can alter her string as many times as she likes. In each operation she chooses one valid index i and either increments or decrements the letter S[i].

Incrementing a letter changes it to the next letter in the alphabet (e.g., 'A' to 'B', 'L' to 'M', and 'Y' to 'Z'). Decrementing a letter changes it to the previous letter in the alphabet (e.g., 'B' to 'A', 'M' to 'L', and 'Z' to 'Y'). The letter 'A' cannot be decremented and the letter 'Z' cannot be incremented.

Multiple operations may be applied to the same index. Thus, S can be transformed into any other string of the same length.

Elly wonders what is the minimal number of operations she has to do on S in order to make it balanced. Find and return that number.

## Structure 💡

```bash
├── README.md
├── src/
│   ├── ellys-balanced-strings.spec.ts # uni tests
│   └── ellys-balanced-strings.ts # algorithm
├── tsconfig.js
├── jest.config.json
└── package.json
```

## Instructions 🛠

Clone the [repository](https://github.com/calvear93/topcoder-ellys-balanced-strings)
and install dependencies with `npm i`.

You should have [NodeJS](https://nodejs.org/) installed on your machine.

## Command ⚙️


| Command               | Action             |
| --------------------- | -------------------|
| npm run start         | execute unit tests |

---

⌨ by Alvear Candia, Cristopher Alejandro <calvear93@gmail.com>
