import { buildProps } from "@whale-ui/utils";
import { wrap } from "lodash-unified";
import { ComputedRef, ExtractPropTypes, InjectionKey } from "vue";



export const rowProps = buildProps({
  gutter: {
    type: Number,
    default: 8,
    values: [0, 8, 12, 16, 24, 32],
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
  gutter: ComputedRef<number>
}
export const rowContextKey: InjectionKey<RowContext> = Symbol('rowContextKey')
