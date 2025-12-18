import { buildProps } from "@whale-ui/utils";
import { wrap } from "lodash-unified";
import { ComputedRef, ExtractPropTypes, InjectionKey, PropType } from "vue";

export const gutterMap = {
  xs: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const



export const rowProps = buildProps({
  gutter: {
    type: [Number, String] as PropType<number| keyof typeof gutterMap>,
    default: 8,
  },
  justify: {
    type: String,
    default: 'start',
    values: ['start', 'end', 'center', 'between', 'around','evenly'],
  },
  align: {
    type: String,
    default: 'start',
    values: ['start', 'end', 'center', 'baseline', 'stretch'],
  },
  wrap: {
    type: Boolean,
    default: true,
    values: [true, false],
  }
} as const)

export type RowProps = ExtractPropTypes<typeof rowProps>

interface RowContext {
  gutter: ComputedRef<RowProps['gutter']>
}
export const rowContextKey: InjectionKey<RowContext> = Symbol('rowContextKey')
