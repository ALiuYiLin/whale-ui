import { buildProps } from '@whale-ui/utils';
import { ExtractPropTypes, PropType } from 'vue';

export const flexProps = buildProps({
  vertical: {
    type: Boolean,
    default: false,
  },
  wrap: {
    type: [Boolean, String] as PropType<boolean | 'nowrap' | 'wrap' | 'wrap-reverse'>,
    default: 'nowrap',
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
  gap: {
    type: [String, Number] as PropType<string | number | 'small' | 'middle' | 'large'>,
    default: '',
  },
  component: {
    type: String,
    default: 'div',
  }
} as const)

export type FlexProps = ExtractPropTypes<typeof flexProps>
