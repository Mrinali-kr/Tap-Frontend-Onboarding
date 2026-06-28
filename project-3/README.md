# json-helper

A tiny zero-dependency JavaScript utility library for safely parsing, validating, formatting, and minifying JSON.

## Installation

```bash
npm install json-helper
```

## Usage

```js
import {
  safeParse,
  safeStringify,
  isValidJson,
  prettifyJson,
  minifyJson
} from "json-helper";
```

### safeParse()

Safely parses a JSON string without throwing an error.

```js
const result = safeParse('{"name":"Mrinali"}');

if (result.success) {
  console.log(result.data);
}
```

### safeStringify()

Safely converts a JavaScript value into a JSON string.

```js
const result = safeStringify({ name: "Mrinali" });

console.log(result.data);
```

### isValidJson()

Returns `true` if the string contains valid JSON.

```js
isValidJson('{"age":21}');
// true
```

### prettifyJson()

Formats JSON with indentation.

```js
prettifyJson('{"name":"Mrinali"}');
```

### minifyJson()

Removes unnecessary whitespace from JSON.

```js
minifyJson(`{
  "name": "Mrinali"
}`);
```

## API

| Function          | Description                  |
| ----------------- | ---------------------------- |
| `safeParse()`     | Safely parses JSON           |
| `safeStringify()` | Safely stringifies values    |
| `isValidJson()`   | Checks if JSON is valid      |
| `prettifyJson()`  | Pretty prints JSON           |
| `minifyJson()`    | Removes whitespace from JSON |

## License

MIT
