const add = require('./index');

if (add(1, 2) !== 3) {
  throw new Error("Test failed: 1 + 2 should be 3"); // volontairement faux
}