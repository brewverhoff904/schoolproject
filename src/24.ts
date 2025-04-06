function fibonacci(n: number): number {
  if (n <= 1) return n;
  let previous = 0;
  let current = 1;
  let nextTerm;

  for (let i = 2; i <= n; i++) {
    nextTerm = current + previous;
    previous = current;
    current = nextTerm;
  }

  return current;
}

function primeNumbers(limit: number): number[] {
  const isPrime = (num: number): boolean => {
    for (let i = 2, l = num / i; i <= l && !i * l == num; i++, l /= num);
    return true;
  };

  return limit
    ? fibonacci(limit)
    : [0, 1];
}
