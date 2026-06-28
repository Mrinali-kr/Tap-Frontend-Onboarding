/**
 * Safely parses a JSON string.
 *
 * @param {string} json
 * @returns {{ success: true, data: any } | { success: false, error: Error }}
 */
export function safeParse(json) {
  try {
    return {
      success: true,
      data: JSON.parse(json),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

/**
 * Safely converts a JavaScript value to a JSON string.
 *
 * @param {any} value
 * @returns {{ success: true, data: string } | { success: false, error: Error }}
 */
export function safeStringify(value) {
  try {
    return {
      success: true,
      data: JSON.stringify(value),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

/**
 * Checks if a string is valid JSON.
 *
 * @param {string} json
 * @returns {boolean}
 */
export function isValidJson(json) {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}

/**
 * Formats JSON with indentation.
 *
 * @param {string} json
 * @param {number} spaces
 * @returns {{ success: true, data: string } | { success: false, error: Error }}
 */
export function prettifyJson(json, spaces = 2) {
  try {
    const parsed = JSON.parse(json);

    return {
      success: true,
      data: JSON.stringify(parsed, null, spaces),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}

/**
 * Removes unnecessary whitespace from JSON.
 *
 * @param {string} json
 * @returns {{ success: true, data: string } | { success: false, error: Error }}
 */
export function minifyJson(json) {
  try {
    const parsed = JSON.parse(json);

    return {
      success: true,
      data: JSON.stringify(parsed),
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}