import assert from "node:assert";
import {
  safeParse,
  safeStringify,
  isValidJson,
  prettifyJson,
  minifyJson,
} from "../src/index.js";

// safeParse
let result = safeParse('{"name":"Mrinali"}');
assert.strictEqual(result.success, true);
assert.strictEqual(result.data.name, "Mrinali");

result = safeParse("{invalid json}");
assert.strictEqual(result.success, false);

// safeStringify
result = safeStringify({ name: "Mrinali" });
assert.strictEqual(result.success, true);
assert.strictEqual(result.data, '{"name":"Mrinali"}');

// isValidJson
assert.strictEqual(isValidJson('{"age":21}'), true);
assert.strictEqual(isValidJson("{age:21}"), false);

// prettifyJson
result = prettifyJson('{"name":"Mrinali"}');
assert.strictEqual(result.success, true);
assert.ok(result.data.includes("\n"));

// minifyJson
result = minifyJson(`{
  "name": "Mrinali"
}`);
assert.strictEqual(result.success, true);
assert.strictEqual(result.data, '{"name":"Mrinali"}');

console.log("✅ All tests passed!");