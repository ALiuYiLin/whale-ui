import { Gutter } from "./row";

const getGutterStyle = (
  value: number | null,
  styleKey: "marginInline" | "marginBlock" | "paddingInline" | "paddingBlock",
  negative?: boolean
) => {
  if (value === null) return {};
  let gutterVal = 0;
  if (typeof value === "number") {
    gutterVal = value;
  }
  return {
    [styleKey]: !!negative ? `-${gutterVal / 2}px` : `${gutterVal / 2}px`,
  };
};

export const getGutterStyles = (
  gutter: Gutter,
  padding?: boolean,
  negative?: boolean
) => {
  if (!gutter) return {};
  let gutterHorizontalVal: number | null = null;
  let gutterVerticalVal: number | null = null;
  if (
    Array.isArray(gutter) &&
    typeof gutter[0] === "number" &&
    typeof gutter[1] === "number"
  ) {
    gutterHorizontalVal = gutter[0] || null;
    gutterVerticalVal = gutter[1] || null;
  } else if (typeof gutter === "number") {
    gutterHorizontalVal = gutter;
  }
  return {
    ...(!padding
      ? getGutterStyle(gutterHorizontalVal, "marginInline", negative)
      : {}),
    ...(!padding
      ? getGutterStyle(gutterVerticalVal, "marginBlock", negative)
      : {}),
    ...(!!padding
      ? getGutterStyle(gutterHorizontalVal, "paddingInline", negative)
      : {}),
    ...(!!padding
      ? getGutterStyle(gutterVerticalVal, "paddingBlock", negative)
      : {}),
  };
};