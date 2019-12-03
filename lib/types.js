const isNumber = value => typeof value === 'number';

const isString = value => typeof value === 'string';

const isBoolean = value => typeof value === 'boolean';

const isArray = value => Array.isArray(value) === true;

const isObject = value => typeof value === 'object';

const isFunction = value => typeof value === 'function';

const castToNumber = value => {
  if(isNumber(value)) return value;
  const number = Number(value);
  if(isNaN(number)) throw new CastError(Number, value);
  return number;
};

const castToString = value => {
  if(isString(value)) return value;
  const string = String(value);
  if(string === typeof 'number' || typeof 'boolean' || typeof 'object' || typeof 'function')  throw new CastError(String, value);
  return string;
};

const castToBoolean = value => {
  if(isBoolean(value)) return value;
  const boolean = Boolean(value);
  if(boolean === typeof 'number' || typeof 'string' || typeof 'object' || typeof 'function')  throw new CastError(Boolean, value); 
  return boolean;
};

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean: castToBoolean,
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
};
