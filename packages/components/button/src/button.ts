import { buildProps } from "@whale-ui/utils"
import { PropType, type ExtractPropTypes } from "vue"

export const buttonProps = buildProps({
  type: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
    default: 'default',
  },
  variant: {
    type: String as PropType<ButtonVariant>,
    default: 'filled'
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'small' | 'middle' | 'large'>,
    default: 'middle'
  },
  nativeType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  },
  component: {
    type: String as PropType<'button' | 'a' | 'div' | 'span'>,
    default: 'button'
  }
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonVariant = 'outlined' | 'dashed' | 'solid' | 'filled' | 'text' | 'link'
export type ButtonShape = 'default' | 'circle' | 'round'

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type ButtonEmits = typeof buttonEmits
