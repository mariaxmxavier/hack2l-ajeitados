/**
 * Deterministic waveform utility adapted from M4ss1ck/whatsapp-simulator.
 * Source: https://github.com/M4ss1ck/whatsapp-simulator
 * License: MIT. Full notice: THIRD_PARTY_NOTICES.md
 */

function hashString(input) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = ((hash << 5) - hash) + input.charCodeAt(index);
    hash |= 0;
  }
  return hash;
}

function mulberry32(seed) {
  return () => {
    let value = seed += 0x6D2B79F5;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildWaveformHeights(seed, count = 38) {
  const random = mulberry32(hashString(seed));
  return Array.from({ length: count }, (_, index) => {
    const value = Math.abs(Math.sin((index + 1) * (0.3 + random() * 0.4)) * 100);
    return Math.max(15, Math.round(value));
  });
}
