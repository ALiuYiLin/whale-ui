import { buildProps } from '@whale-ui/utils';
import { ExtractPropTypes } from 'vue';

export const colProps = buildProps({
  span: {
    type: Number,
    default: 24,
  },
} as const)

export type ColProps = ExtractPropTypes<typeof colProps>
