export function rem(...values: number[]) {
  return values.map((v) => `${v / 16}rem`).join(" ");
}
