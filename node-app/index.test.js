const { test } = require('node:test');
const assert = require('node:assert');
const { execSync } = require('child_process');

test('index.js prints the correct message', () => {
  const output = execSync('node index.js').toString().trim();
  assert.strictEqual(output, "Hello from the Node CI/CD app!");
});
