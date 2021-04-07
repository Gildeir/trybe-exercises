// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:

const assert = require('assert');
// const { access } = require('node:fs');

const sum = (...numbers) => numbers.reduce(((a, b) => a +b), 0);

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
