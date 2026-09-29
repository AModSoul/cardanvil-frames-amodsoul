import { type CardBoxes } from "@cardanvil/frame-kit";

/**
 * Where everything sits on the card.
 *
 * Absolute pixels on a 3264 x 4440 canvas — the full printed sheet *including
 * bleed*, 2.72 x 3.7 in at 1200 DPI. The card face inside it is 63 x 88 mm,
 * leaving roughly 3 mm of bleed on every edge, so `y: 0` is above the top of
 * the card rather than at it.
 *
 * `fontSize` is in points, not pixels; the renderer converts.
 */
export const boxes: CardBoxes = {
  /** The window your art shows through. The placeholder frames are transparent here. */
  art: { x: 0, y: 0, width: 3264, height: 2436 },

  mana: { x: 400, y: 345, width: 2470, height: 177, fontSize: 55 },
  title: { x: 400, y: 355, width: 2470, height: 172, fontSize: 120 },
  type: { x: 400, y: 2504, width: 2400, height: 144, fontSize: 106 },

  setSymbol: { x: 2574, y: 2480, width: 300, height: 175 },

  rules: { x: 480, y: 2766, width: 2300, height: 1170, fontSize: 116 },

  /** Only drawn on cards that have power and toughness. */
  pt: { x: 2430, y: 3830, width: 556, height: 264, fontSize: 116 },

  ptImage: { x: 2434, y: 3825 },

  /** The artist line and set information along the bottom. */
  collectorInfo: {
  x: 333,
  y: 4015,
  width: 2200,
  height: 200,
  fontSize: 50,
  color: "white",
  },
};
