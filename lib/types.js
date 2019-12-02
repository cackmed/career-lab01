const isNumber = value => typeof value === 'number';

const castToNumber = value => {
  if(isNumber(value)) return value;
  const number = Number(value);
  if(isNaN(number)) throw new CastError(Number, value);
  return number;
};

const isString = value => typeof value === 'string';

const castToString = value => {
  if(isString(value)) return value;
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
  String: castToString
};

const getCaster = Type => {  
  return casters[Type.name] || null;
};

module.exports = {
  isNumber,
  isString,
  CastError,
  getCaster,
  castToNumber,
  castToString
};
