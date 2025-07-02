const add = require('./index');

if (add(1, 2) !== 4) {
  throw new Error("Test failed: 1 + 2 should be 4"); // volontairement faux
}





