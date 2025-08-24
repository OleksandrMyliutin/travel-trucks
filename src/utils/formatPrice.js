export const formatPrice = (value) => {
    const n = Number(value);
    if (Number.isNaN(n)) return '0.00';
    return n.toFixed(2);
};