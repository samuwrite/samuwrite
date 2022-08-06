// fontSize, lineHeight, spacing, weight
type Tuple = [number, number, number, number];

interface Detail {
  fontSize: number;
  lineHeight: number;
  spacing: number;
  weight: number;
}

const toDetail = (tuple: Tuple): Detail => {
  const [fontSize, lineHeight, spacing, weight] = tuple;
  return { fontSize, lineHeight, spacing, weight };
};

const RAWS: [string, Tuple][] = [
  ["4XS", [11, 1.9, 42, 490]],
  ["3XS", [12, 1.89, 38, 482]],
  ["2XS", [13, 1.89, 34, 475]],
  ["XS", [14, 1.88, 28, 470]],
  ["S", [15, 1.87, 24, 465]],
  ["M", [16, 1.86, 22, 460]],
  ["L", [18, 1.85, 20, 455]],
  ["XL", [20, 1.83, 20, 450]],
  ["2XL", [24, 1.79, 20, 445]],
  ["3XL", [28, 1.75, 19, 440]],
  ["4XL", [32, 1.71, 18, 435]],
  ["5XL", [36, 1.67, 17, 430]],
  ["6XL", [42, 1.61, 16, 425]],
  ["7XL", [48, 1.55, 15, 425]],
  ["8XL", [54, 1.49, 14, 425]],
  ["9XL", [60, 1.43, 13, 425]],
  ["10XL", [72, 1.38, 12, 425]],
];

export const EDITOR_TYPOGRAPHY_DETAILS: Map<string, Detail> = new Map(
  RAWS.map(([key, tuple]) => [key, toDetail(tuple)])
);
