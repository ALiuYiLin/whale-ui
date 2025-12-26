import { ExtractPropTypes, PropType } from 'vue'

export const tooltipProps = {
  content: {
    type: String,
    default: ''
  },
  placement: {
    type: String as PropType<'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'>,
    default: 'top'
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover'
  },
  visible: {
    type: Boolean as PropType<boolean | undefined>,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  }
}

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
