const { toCelsius, toFahrenheit, movingAverage } = require('../src/utils/conversions');

describe('toCelsius', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });
  test('lanza error si no es número', () => {
    expect(() => toCelsius('x')).toThrow(TypeError);
  });
  test('lanza error si es Infinity', () => {
    expect(() => toCelsius(Infinity)).toThrow(TypeError);
  });
});

describe('toFahrenheit', () => {
  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });
  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });
  test('-40°C ↔ -40°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
    expect(toCelsius(-40)).toBe(-40.0);
  });
  test('lanza error si no es número', () => {
    expect(() => toFahrenheit('x')).toThrow(TypeError);
  });
});

describe('movingAverage', () => {
  test('[10,20,30,40], 2 → [15.00,25.00,35.00]', () => {
    expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
  });
  test('[1,2,3], 3 → [2.00]', () => {
    expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
  });
  test('error si window fuera de rango', () => {
    expect(() => movingAverage([1, 2], 5)).toThrow(RangeError);
  });
  test('error si valores no numéricos', () => {
    expect(() => movingAverage([1, "x"], 2)).toThrow(TypeError);
  });
  test('error si series no es array', () => {
    expect(() => movingAverage("not array", 2)).toThrow(TypeError);
  });
  test('error si series está vacío', () => {
    expect(() => movingAverage([], 2)).toThrow(TypeError);
  });
  test('error si window < 2', () => {
    expect(() => movingAverage([1, 2, 3], 1)).toThrow(RangeError);
  });
  test('error si window no es entero', () => {
    expect(() => movingAverage([1, 2, 3], 2.5)).toThrow(RangeError);
  });
});
