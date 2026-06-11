export function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (s >>> 0) / 0xFFFFFFFF;
  };
}

export function drawCards(deck: any[], seed: number, count = 3) {
  const rng = seededRandom(seed);
  const copy = [...deck];
  const drawn = [];
  for(let i = 0; i < count; i++) {
    const idx = Math.floor(rng() * copy.length);
    drawn.push(copy.splice(idx, 1)[0]);
  }
  return drawn;
}
