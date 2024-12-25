// Random number generator returns any  number between 0 and the parameter you assigned
export function randomNumber(x: number) {
  const value = Math.round(Math.random() * x);

  return value;
}
