function toCelsius(f) {
  if (typeof f !== 'number' || !Number.isFinite(f)) {
    throw new TypeError('f debe ser un número finito');
  }
  return Number(((f - 32) * 5 / 9).toFixed(1));
}

function toFahrenheit(c) {
  if (typeof c !== 'number' || !Number.isFinite(c)) {
    throw new TypeError('c debe ser un número finito');
  }
  return Number(((c * 9 / 5) + 32).toFixed(1));
}

function movingAverage(series, window) {
  if (!Array.isArray(series) || series.length === 0) {
    throw new TypeError('series debe ser un arreglo de números');
  }
  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('window fuera de rango');
  }
  for (const v of series) {
    if (typeof v !== 'number' || !Number.isFinite(v)) {
      throw new TypeError('series contiene valores no numéricos');
    }
  }

  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }
  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };
