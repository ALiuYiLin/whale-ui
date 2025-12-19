import { buildProps } from "@whale-ui/utils";
import { ComputedRef, ExtractPropTypes, InjectionKey, PropType } from "vue";

// type ResponsiveKey = 'xs'|'sm'|'md'|'lg'
// type ResponsiveGutter = Record<ResponsiveKey, number>

export type Gutter = number | [number, number];

export const rowProps = buildProps({
  gutter: {
    type: [Number, [Number, Number]] as PropType<Gutter>,
    default: 8,
  },
  justify: {
    type: String,
    default: "start",
    values: ["start", "end", "center", "between", "around", "evenly"],
  },
  align: {
    type: String,
    default: "start",
    values: ["start", "end", "center", "baseline", "stretch"],
  },
  wrap: {
    type: Boolean,
    default: true,
    values: [true, false],
  },
} as const);

export type RowProps = ExtractPropTypes<typeof rowProps>;

interface RowContext {
  gutter: ComputedRef<RowProps["gutter"]>;
}
export const rowContextKey: InjectionKey<RowContext> = Symbol("rowContextKey");


