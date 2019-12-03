const {
  isNumber,
  castToNumber,
  isString,
  castToString,
  isBoolean,
  castToBoolean,
  isArray,
  isObject,
  isFunction
} = require('../lib/types.js');
  
console.log(isNumber('3'));
console.log(castToNumber('3'));
console.log(isString('3'));
console.log(castToString('3'));
console.log(isBoolean(true));
console.log(castToBoolean(true));
console.log(isArray([]));
console.log(isObject({}));
console.log(isFunction(() => {}));
