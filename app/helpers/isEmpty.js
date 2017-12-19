/**
 * Has own property.
 *
 * @type {Function}
 */

const has = Object.prototype.hasOwnProperty;

/**
 * To string.
 *
 * @type {Function}
 */

const toString = Object.prototype.toString; // eslint-disable-line

/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty(val) {
  // Null and Undefined...
  if (val == null) return true;

  // Booleans...
  if (typeof val === 'boolean') return false;

  // Numbers...
  if (typeof val === 'number') return val === 0;

  // Strings...
  if (typeof val === 'string') return val.length === 0;

  // Functions...
  if (typeof val === 'function') return val.length === 0;

  // Arrays...
  if (Array.isArray(val)) return val.length === 0;

  // Errors...
  if (val instanceof Error) return val.message === '';

  // Objects...
  if (val.toString === toString) {
    switch (val.toString()) { // eslint-disable-line

      // Maps, Sets, Files and Errors...
      case '[object File]':
      case '[object Map]':
      case '[object Set]': {
        return val.size === 0;
      }

      // Plain objects...
      case '[object Object]': {
        for (const key in val) { // eslint-disable-line
          if (has.call(val, key)) return false;
        }

        return true;
      }
    }
  }

  // Anything else...
  return false;
}

/**
 * Export `isEmpty`.
 *
 * @type {Function}
 */

export default isEmpty;
