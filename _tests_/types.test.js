const {
  isNumber,
  castToNumber,
  getCaster,
  isString,
  castToString,
  isBoolean,
  castToBoolean,
  isArray,
  isObject,
  isFunction,
} = require('../lib/types.js');
    
describe('validator module', () => {
  describe('basic validation', () => {
    it('properly tells if a value is a numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
    it('properly tells if a value is a string', () => {
      expect(isString('hi')).toBeTruthy();
      expect(isString('')).toBeTruthy();
      expect(isString(3)).toBeFalsy();
      expect(isString([])).toBeFalsy();
      expect(isString({})).toBeFalsy();
      expect(isString(() => {})).toBeFalsy();
      expect(isString((true))).toBeFalsy();
    });
    it('properly tells if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
      expect(isBoolean(false)).toBeTruthy();
      expect(isBoolean(3)).toBeFalsy();
      expect(isBoolean('hi')).toBeFalsy();
      expect(isBoolean([])).toBeFalsy();
      expect(isBoolean({})).toBeFalsy();
      expect(isBoolean(() => {})).toBeFalsy();
    });
    it('properly tells if a value is a array', () => {
      expect(isArray([])).toBeTruthy();
      expect(isArray(3)).toBeFalsy();
      expect(isArray('hi')).toBeFalsy();
      expect(isArray({})).toBeFalsy();
      expect(isArray(() => {})).toBeFalsy();
      expect(isArray((true))).toBeFalsy();
    });
    it('properly tells if a value is a object', () => {
      expect(isObject({})).toBeTruthy();
      expect(isObject(3)).toBeFalsy();
      expect(isObject('hi')).toBeFalsy();
      expect(isObject(() => {})).toBeFalsy();
      expect(isObject((true))).toBeFalsy();
      expect(isObject([])).toBeTruthy();
    });
    it('properly tells if a value is a function', () => {
      expect(isFunction(() => {})).toBeTruthy();
      expect(isFunction(3)).toBeFalsy();
      expect(isFunction('hi')).toBeFalsy();
      expect(isFunction({})).toBeFalsy();
      expect(isFunction((true))).toBeFalsy();
      expect(isFunction([])).toBeFalsy();
    });
  });
    
  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);      
    });
    it('can cast values to a string', () => {
      expect(castToString('hi')).toEqual('hi');
      expect(castToString('')).toEqual('');
    });
    it('can cast values to a boolean', () => {
      expect(castToBoolean(true)).toEqual(true);
      expect(castToBoolean(false)).toEqual(false);
    });
    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });
  });
    
  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(String)).toEqual(castToString);
    expect(getCaster(Boolean)).toEqual(castToBoolean);
    expect(getCaster(Promise)).toBeNull();
  });
});
