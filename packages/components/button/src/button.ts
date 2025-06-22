import { useSizeProp } from "@whale-ui/hooks";
import { buildProps } from "@whale-ui/utils";



export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  '',
] as const


export const buttonProps = buildProps({
  size:useSizeProp,
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  round: Boolean,
} as const)