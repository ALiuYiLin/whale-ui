import { buildProps } from '@whale-ui/utils';
import { ExtractPropTypes, PropType } from 'vue';

export const dividerProps = buildProps({
  variant: {
    type: String,
    values: ['dashed', 'dotted', 'solid'],
    default: 'solid',
  },
  size: {
    type: String,
    values: ['small', 'middle', 'large'],
    default: 'middle',
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  titlePlacement: {
    type: String,
    values: ['start', 'end', 'center'],
    default: 'center',
  },
} as const)
  
export type DividerProps = ExtractPropTypes<typeof dividerProps>
