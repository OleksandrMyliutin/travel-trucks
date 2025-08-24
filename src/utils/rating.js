export function splitStars(value = 0, outOf = 5) {
    const v = Math.max(0, Math.min(Number(value) || 0, outOf));
    let full = Math.floor(v);
    const frac = v - full;

    const half = frac >= 0.25 && frac < 0.75 ? 1 : 0;
    if (frac >= 0.75) full += 1;

    full = Math.min(full, outOf);
    const empty = Math.max(outOf - full - half, 0);
    return { full, half, empty };
}
